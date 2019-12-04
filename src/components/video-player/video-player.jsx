import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';


export class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this.videoRef = React.createRef();
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

  render() {
    const {preview, poster} = this.props;

    return <video width="280" height="175" preload="metadata" muted loop
      src={preview}
      poster={poster}
      ref={this.videoRef}
    />;
  }
}


VideoPlayer.propTypes = {
  poster: PropTypes.string.isRequired,
  preview: PropTypes.string.isRequired,
  isPlaying: PropTypes.bool.isRequired,
};
