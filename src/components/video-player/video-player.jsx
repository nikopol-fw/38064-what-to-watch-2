import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

export class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this.videoRef = React.createRef();
  }

  render() {
    const {preview, poster} = this.props;

    return <video width="280" height="175" preload="metadata" muted loop
      src={preview}
      poster={`/img/${poster}`}

      ref={this.videoRef}
    />;
  }

  componentDidUpdate() {
    /** @type {HTMLVideoElement} */
    const videoElement = this.videoRef.current;
    if (this.props.isPlaying) {
      videoElement.play();
    } else {
      videoElement.load();
    }
  }
}

VideoPlayer.propTypes = {
  preview: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  isPlaying: PropTypes.bool.isRequired,
};
