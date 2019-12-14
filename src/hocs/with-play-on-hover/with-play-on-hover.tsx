import * as React from 'react';


export const withPlayOnHover = (Component) => {
  type T = React.ComponentProps<typeof Component>;

  interface Props extends T {
    isPlaying: boolean;
  }

  class WithPlayOnHover extends React.PureComponent<Props> {

    videoRef = React.createRef<HTMLVideoElement>();

    static readonly displayName = `WithPlayOnHover(${Component.displayName || Component.name})`;

    componentDidUpdate() {
      const videoElement = this.videoRef.current;
      if (this.props.isPlaying) {
        videoElement.play();
      } else {
        videoElement.load();
      }
    }

    render() {

      return (
        <Component
          {...this.props}
          videoRef={this.videoRef}
        />
      );
    }
  }

  return WithPlayOnHover;
};
