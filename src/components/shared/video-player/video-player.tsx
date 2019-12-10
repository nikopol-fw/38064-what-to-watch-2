import * as React from 'react';


interface Props {
  poster: string;
  preview: string;
  isPlaying: boolean;
}

export class VideoPlayer extends React.PureComponent<Props, null> {

  private readonly videoRef = React.createRef<HTMLVideoElement>();

  componentDidUpdate() {
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
