import * as React from 'react';

import {VideoPlayer} from '../video-player/video-player';


interface Props {
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
    const {title, previewImage, previewVideoLink, isPlaying, onCardMouseLeave} = this.props;

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
        <a className="small-movie-card__link" href="/films">{title}</a>
      </h3>
    </article>;
  }
}
