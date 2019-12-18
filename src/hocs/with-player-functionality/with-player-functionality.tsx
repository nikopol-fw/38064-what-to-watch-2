import * as React from 'react';

import {formatTime} from '../../lib/format-time/format-time';


interface State {
  isPlaying: boolean;
  percentage: number;
  timeLeft: number;
}

export const withPlayerFunctionality = (Component) => {
  type T = React.ComponentProps<typeof Component>;

  class WithPlayerFunctionality extends React.PureComponent<T, State> {

    state = {
      isPlaying: false,
      percentage: 0,
      timeLeft: 0,
    };

    private readonly videoRef = React.createRef<HTMLVideoElement>();

    static readonly displayName = `WithPlayerFunctionality(${Component.displayName || Component.name})`;

    constructor(props) {
      super(props);

      this.onPlayBtnClick = this.onPlayBtnClick.bind(this);
      this.onPauseBtnClick = this.onPauseBtnClick.bind(this);
      this.onFullScreenBtnClick = this.onFullScreenBtnClick.bind(this);
      this.onMetadataLoaded = this.onMetadataLoaded.bind(this);
      this.onTimeUpdate = this.onTimeUpdate.bind(this);
    }

    componentDidUpdate() {
      const videoElement = this.videoRef.current;
      if (this.state.isPlaying) {
        videoElement.play();
      } else {
        videoElement.pause();
      }
    }

    private onPlayBtnClick() {
      this.setState({
        isPlaying: true,
      });
    }

    private onPauseBtnClick() {
      this.setState({
        isPlaying: false,
      });
    }

    private onFullScreenBtnClick() {
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

    private onMetadataLoaded() {
      const video = this.videoRef.current;
      this.setState({
        timeLeft: video.duration,
      });
    }

    private onTimeUpdate() {
      const video = this.videoRef.current;
      const timeLeft = video.duration - video.currentTime;
      const percentage = video.currentTime / video.duration * 100;
      this.setState({percentage, timeLeft});
    }

    render() {
      const {isPlaying, percentage, timeLeft} = this.state;
      const formattedTiming = formatTime(timeLeft, `seconds`, `HH:mm:ss`);

      return (
        <Component
          {...this.props}
          isPlaying={isPlaying}
          percentage={percentage}
          timingString={formattedTiming}
          videoRef={this.videoRef}
          onFullScreenBtnClick={this.onFullScreenBtnClick}
          onPlayBtnClick={this.onPlayBtnClick}
          onPauseBtnClick={this.onPauseBtnClick}
          onMetadataLoaded={this.onMetadataLoaded}
          onTimeUpdate={this.onTimeUpdate}
        />
      );
    }
  }

  return WithPlayerFunctionality;
};
