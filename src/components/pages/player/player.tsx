import * as React from 'react';
import {connect} from "react-redux";
import {RouteComponentProps} from 'react-router-dom';

import {Film} from "../../../models/Film";
import {getFilmById} from "../../../reducer/data/selectors";
import {VideoPlayer} from "../../shared/video-player/video-player";
import {formatTime} from "../../../lib/format-time/format-time";


interface Props extends RouteComponentProps {
  film: Film;
}

interface Stats {
  isPlaying: boolean;

  percentage: number;
  timeLeft: number;
}

export class Player extends React.PureComponent<Props, Stats> {
  state = {
    isPlaying: false,

    percentage: 0,
    timeLeft: 0,
  };

  private duration = 0;

  private readonly videoRef = React.createRef<HTMLVideoElement>();

  static defaultProps = {
    film: {
      backgroundColor: null,
      backgroundImage: null,
      description: null,
      director: null,
      genre: null,
      id: null,
      isFavorite: null,
      name: null,
      posterImage: null,
      previewImage: null,
      previewVideoLink: null,
      rating: null,
      released: null,
      runTime: null,
      scoresCount: null,
      starring: null,
      videoLink: null,
    },
  };

  constructor(props: Props) {
    super(props);

    this.clickExitBtnHandler = this.clickExitBtnHandler.bind(this);
    this.clickPlayBtnHandler = this.clickPlayBtnHandler.bind(this);
    this.clickPauseBtnHandler = this.clickPauseBtnHandler.bind(this);
    this.clickFullScreenBtnHandler = this.clickFullScreenBtnHandler.bind(this);
    this.loadedMetadataHandler = this.loadedMetadataHandler.bind(this);
    this.updateTimeHandler = this.updateTimeHandler.bind(this);
  }

  componentDidUpdate() {
    const videoElement = this.videoRef.current;
    if (this.state.isPlaying) {
      videoElement.play();
    } else {
      videoElement.pause();
    }
  }

  clickPlayBtnHandler() {
    this.setState({
      isPlaying: true,
    });
  }

  clickPauseBtnHandler() {
    this.setState({
      isPlaying: false,
    });
  }

  clickFullScreenBtnHandler() {
    const video = this.videoRef.current;
    if (!video.requestFullscreen) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      // @ts-ignore
      if (video.mozRequestFullScreen) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        video.mozRequestFullScreen();
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
      } else if (video.webkitRequestFullScreen) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        video.webkitRequestFullScreen();
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
      } else if (video.msRequestFullscreen) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        video.msRequestFullscreen();
      }
    } else {
      video.requestFullscreen();
    }
  }

  clickExitBtnHandler() {
    const {history, location} = this.props;
    if (location.key) {
      history.goBack();
    } else {
      history.push(`/`);
    }
  }

  loadedMetadataHandler() {
    const video = this.videoRef.current;
    this.duration = video.duration;
    this.setState({
      timeLeft: this.duration,
    });
  }

  updateTimeHandler() {
    const video = this.videoRef.current;
    const timeLeft = this.duration - video.currentTime;
    const percentage = video.currentTime / this.duration * 100;
    this.setState({percentage, timeLeft});
  }

  render() {
    const {film} = this.props;
    const {percentage, timeLeft} = this.state;

    const formattedTiming = formatTime(timeLeft, `seconds`, `HH:mm:ss`);

    return (
      <div className="player">
        <video className="player__video" preload="metadata"
          src={film.videoLink}
          poster={film.previewImage}
          ref={this.videoRef}
          onLoadedMetadata={this.loadedMetadataHandler}
          onTimeUpdate={this.updateTimeHandler}
        />

        <button type="button" className="player__exit" onClick={this.clickExitBtnHandler}>Exit</button>

        <div className="player__controls">
          <div className="player__controls-row">
            <div className="player__time">
              <progress className="player__progress" value={percentage} max="100"/>
              <div className="player__toggler" style={{left: `${percentage}%`}}>Toggler</div>
            </div>
            <div className="player__time-value">{formattedTiming}</div>
          </div>

          <div className="player__controls-row">
            {this.state.isPlaying
              ? (
                <button type="button" className="player__play" onClick={this.clickPauseBtnHandler}>
                  <svg viewBox="0 0 14 21" width="14" height="21">
                    <use xlinkHref="#pause"/>
                  </svg>
                  <span>Pause</span>
                </button>
              ) : (
                <button type="button" className="player__play" onClick={this.clickPlayBtnHandler}>
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"/>
                  </svg>
                  <span>Play</span>
                </button>
              )
            }
            <div className="player__name">{film.name}</div>

            <button type="button" className="player__full-screen" onClick={this.clickFullScreenBtnHandler}>
              <svg viewBox="0 0 27 27" width="27" height="27">
                <use xlinkHref="#full-screen"/>
              </svg>
              <span>Full screen</span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  film: getFilmById(state, +ownProps.match.params.id),
});


export default connect(mapStateToProps)(Player);
