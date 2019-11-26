import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import {FilmCard} from '../film-card/film-card';


export class FilmsList extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {activeGenre, films, activeCard, onCardMouseEnter, onCardMouseLeaver} = this.props;

    return <div className="catalog__movies-list">
      {activeGenre === `All genres`
        ? films
          .map((film, i) => <FilmCard key={`film-card-${film.id}`}
            title={film.title}
            preview={film.preview}
            poster={film.poster}
            isPlaying={i === activeCard}
            onCardMouseEnter={onCardMouseEnter.bind(null, i)}
            onCardMouseLeave={onCardMouseLeaver}
          />)
        : films
          .filter((film) => film.genre === activeGenre)
          .map((film, i) => <FilmCard key={`film-card-${film.id}`}
            title={film.title}
            preview={film.preview}
            poster={film.poster}
            isPlaying={i === activeCard}
            onCardMouseEnter={onCardMouseEnter.bind(null, i)}
            onCardMouseLeave={onCardMouseLeaver}
          />)}
    </div>;
  }
}


FilmsList.propTypes = {
  activeGenre: PropTypes.string.isRequired,
  films: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
  })).isRequired,
  activeCard: PropTypes.number,
  onCardMouseEnter: PropTypes.func.isRequired,
  onCardMouseLeaver: PropTypes.func.isRequired,
};
