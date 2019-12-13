import * as React from 'react';
import {connect} from "react-redux";
import {RouteComponentProps} from 'react-router-dom';

import {Film} from "../../../models/Film";
import {getFilmById} from "../../../reducer/data/selectors";
import {VideoPlayer} from "../../shared/video-player/video-player";


interface Props extends RouteComponentProps {
  film: Film;
}

export class Player extends React.PureComponent<Props> {

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
  }

  clickExitBtnHandler() {
    const {history, location} = this.props;
    if (location.key) {
      history.goBack();
    } else {
      history.push(`/`);
    }
  }

  render() {
    const {film} = this.props;

    return (
      <div className="player">
        <video className="player__video" preload="metadata"
          src={film.videoLink}
          poster={film.previewImage}
          ref={this.videoRef}
        />

        <button type="button" className="player__exit" onClick={this.clickExitBtnHandler}>Exit</button>

        <div className="player__controls">
          <div className="player__controls-row">
            <div className="player__time">
              <progress className="player__progress" value="30" max="100"/>
              <div className="player__toggler" style={{left: `30%`}}>Toggler</div>
            </div>
            <div className="player__time-value">1:30:29</div>
          </div>

          <div className="player__controls-row">
            <button type="button" className="player__play">
              <svg viewBox="0 0 19 19" width="19" height="19">
                <use xlinkHref="#play-s"/>
              </svg>
              <span>Play</span>
            </button>
            <div className="player__name">Transpotting</div>

            <button type="button" className="player__full-screen">
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
