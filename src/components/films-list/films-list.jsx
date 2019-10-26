import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import {FilmCard} from '../film-card/film-card';

export class FilmsList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeFilm: -1,
    };
  }

  render() {
    const {films} = this.props;

    return <div className="catalog__movies-list">
      {films.map((film, i) => <FilmCard key={i}
        title={film.title}
        img={film.img}
        isActive={this.state.activeFilm === i}
        onCardHover={this._cardHoverHandler.bind(this, i)}
      />)}
    </div>;
  }

  _cardHoverHandler(ind) {
    this._setActiveState(ind);
  }

  _setActiveState(ind) {
    this.setState({
      activeFilm: ind,
    });
  }
}

FilmsList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
  })).isRequired,
};
