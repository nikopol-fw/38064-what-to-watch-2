import * as React from 'react';
import {RefObject} from 'react';
import {Link} from 'react-router-dom';

import {VideoPlayer} from '../video-player/video-player';


interface Props {
  id: number;
  title: string;
  previewImage: string;
  previewVideoLink: string;

  videoRef?: RefObject<HTMLVideoElement>;

  index: number;
  onCardMouseEnter: (ind: number) => void;
  onCardMouseLeave: () => void;
}

export class FilmCard extends React.PureComponent<Props, null> {

  private readonly onCardMouserEnter: () => void;

  constructor(props) {
    super(props);

    this.onCardMouserEnter = this.props.onCardMouseEnter.bind(null, this.props.index);
  }

  render() {
    const {id, title, previewImage, previewVideoLink, videoRef, onCardMouseLeave} = this.props;

    return <article className="small-movie-card catalog__movies-card"
      onMouseEnter={this.onCardMouserEnter}
      onMouseLeave={onCardMouseLeave}>
      <div className="small-movie-card__image">
        <VideoPlayer
          isMuted={true}
          poster={previewImage}
          video={previewVideoLink}
          videoRef={videoRef}
        />
      </div>
      <h3 className="small-movie-card__title">
        <Link to={`/films/${id}`} className="small-movie-card__link">{title}</Link>
      </h3>
    </article>;
  }
}
