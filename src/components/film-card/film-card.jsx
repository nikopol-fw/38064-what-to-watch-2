import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import {VideoPlayer} from '../video-player/video-player';


class FilmCard extends PureComponent {
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


FilmCard.propTypes = {
  title: PropTypes.string.isRequired,
  previewImage: PropTypes.string.isRequired,
  previewVideoLink: PropTypes.string.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired,
  onCardMouseEnter: PropTypes.func.isRequired,
  onCardMouseLeave: PropTypes.func.isRequired,
};


export {FilmCard};
