import * as React from 'react';
import {RefObject} from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import {RouteComponentProps} from 'react-router-dom';

import {Film} from "../../../models/film";
import {getFilmById} from "../../../reducer/data/selectors";
import {withPlayerFunctionality} from "../../../hocs/with-player-functionality/with-player-functionality";
import {VideoPlayer} from "../../shared/video-player/video-player";
import {PlayerProgress} from "../../shared/player-progress/player-progress";


interface Props extends RouteComponentProps {
  film: Film;

  isPlaying: boolean;
  percentage: number;
  timingString: string;
  videoRef: RefObject<HTMLVideoElement>;
  onFullScreenBtnClick: () => void;
  onPlayBtnClick: () => void;
  onPauseBtnClick: () => void;
  onMetadataLoaded: () => void;
  onTimeUpdate: () => void;
}

export class Player extends React.PureComponent<Props> {

  static readonly defaultProps = {
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
    isPlaying: false,
    percentage: 0,
    timingString: ``,
  };

  constructor(props: Props) {
    super(props);

    this.exitBtnClickHandler = this.exitBtnClickHandler.bind(this);
  }

  private exitBtnClickHandler() {
    const {history, location} = this.props;
    if (location.key) {
      history.goBack();
    } else {
      history.push(`/`);
    }
  }

  render() {
    const {
      film,
      isPlaying,
      percentage,
      timingString,
      videoRef,
      onFullScreenBtnClick,
      onPlayBtnClick,
      onPauseBtnClick,
      onMetadataLoaded,
      onTimeUpdate,
    } = this.props;

    return (
      <div className="player">
        <VideoPlayer
          isMuted={false}
          poster={film.previewImage}
          video={film.videoLink}
          videoRef={videoRef}
          onMetadataLoaded={onMetadataLoaded}
          onTimeUpdate={onTimeUpdate}
        />

        <button type="button" className="player__exit" onClick={this.exitBtnClickHandler}>Exit</button>

        <div className="player__controls">

          <PlayerProgress
            percentage={percentage}
            timingString={timingString}
          />

          <div className="player__controls-row">
            {isPlaying
              ? (
                <button type="button" className="player__play" onClick={onPauseBtnClick}>
                  <svg viewBox="0 0 14 21" width="14" height="21">
                    <use xlinkHref="#pause"/>
                  </svg>
                  <span>Pause</span>
                </button>
              ) : (
                <button type="button" className="player__play" onClick={onPlayBtnClick}>
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"/>
                  </svg>
                  <span>Play</span>
                </button>
              )
            }
            <div className="player__name">{film.name}</div>

            <button type="button" className="player__full-screen" onClick={onFullScreenBtnClick}>
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


export default compose(
    connect(mapStateToProps),
    withPlayerFunctionality
)(Player);
