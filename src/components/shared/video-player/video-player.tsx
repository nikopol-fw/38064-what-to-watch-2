import * as React from 'react';
import {RefObject} from "react";


interface Props {
  isMuted: boolean;
  poster: string;
  video: string;

  videoRef?: RefObject<HTMLVideoElement>;

  onMetadataLoaded?: () => void;
  onTimeUpdate?: () => void;
}

export const VideoPlayer: React.FC<Props> = (props) => {
  const {isMuted, poster, video, videoRef, onMetadataLoaded, onTimeUpdate} = props;

  return onMetadataLoaded && onTimeUpdate
    ? (
      <video className="player__video" preload="metadata"
        src={video}
        poster={poster}
        muted={isMuted}
        ref={videoRef}
        onLoadedMetadata={onMetadataLoaded}
        onTimeUpdate={onTimeUpdate}
      />
    ) : (
      <video className="player__video" preload="metadata"
        src={video}
        poster={poster}
        muted={isMuted}
        ref={videoRef}
      />
    );
};
