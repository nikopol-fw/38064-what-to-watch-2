import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import {FilmCard} from '../film-card/film-card';


export class FilmsList extends PureComponent {
  constructor(props) {
    super(props);

    this.videoPlayDelay = 1000;
    this.delayTimer = null;

    this.onCardMouseEnter = this.onCardMouseEnter.bind(this);
    this.onCardMouseLeaver = this.onCardMouseLeaver.bind(this);
  }

  onCardMouseEnter(i) {
    this.delayTimer = setTimeout(() => {
      this.props.setActiveCard(i);
    }, this.videoPlayDelay);
  }

  onCardMouseLeaver() {
    if (this.delayTimer) {
      clearTimeout(this.delayTimer);
      this.delayTimer = null;
    }
    this.props.resetActiveCard();
  }

  render() {
    const {activeGenre, films, activeCard} = this.props;

    return <div className="catalog__movies-list">
      {activeGenre === `All genres`
        ? films
          .map((film, i) => <FilmCard key={`film-card-${i}`}
            title={film.name}
            preview={film.preview_video_link}
            poster={film.preview_image}
            isPlaying={i === activeCard}
            index={i}
            onCardMouseEnter={this.onCardMouseEnter}
            onCardMouseLeave={this.onCardMouseLeaver}
          />)
        : films
          .filter((film) => film.genre === activeGenre)
          .map((film, i) => <FilmCard key={`film-card-${i}`}
            title={film.title}
            preview={film.preview}
            poster={film.poster}
            isPlaying={i === activeCard}
            index={i}
            onCardMouseEnter={this.onCardMouseEnter}
            onCardMouseLeave={this.onCardMouseLeaver}
          />)}
    </div>;
  }
}


FilmsList.propTypes = {
  activeGenre: PropTypes.string.isRequired,
  films: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    preview_image: PropTypes.string.isRequired,
    preview_video_link: PropTypes.string.isRequired,
  })).isRequired,
  activeCard: PropTypes.number,
  setActiveCard: PropTypes.func.isRequired,
  resetActiveCard: PropTypes.func.isRequired,
};
