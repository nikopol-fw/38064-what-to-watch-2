import * as React from 'react';

import {VideoPlayer} from '../video-player/video-player';
import {Link} from "react-router-dom";


interface Props {
  id: number;
  title: string;
  previewImage: string;
  previewVideoLink: string;
  isPlaying: boolean;
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
    const {id, title, previewImage, previewVideoLink, isPlaying, onCardMouseLeave} = this.props;

    return <article className="small-movie-card catalog__movies-card"
      onMouseEnter={this.onCardMouserEnter}
      onMouseLeave={onCardMouseLeave}>
      <div className="small-movie-card__image">
        <VideoPlayer
          poster={previewImage}
          preview={previewVideoLink}
          isPlaying={isPlaying}
        />
      </div>
      <h3 className="small-movie-card__title">
        <Link to={`/films/${id}`} className="small-movie-card__link">{title}</Link>
      </h3>
    </article>;
  }
}
