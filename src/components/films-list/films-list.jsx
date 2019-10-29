import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import {FilmCard} from '../film-card/film-card';

export class FilmsList extends PureComponent {
  constructor(props) {
    super(props);
    this.videoPlayDelay = 1000;
    this.delayTimer = null;

    this.state = {
      activeFilm: -1,
    };
  }

  render() {
    const {films} = this.props;

    return <div className="catalog__movies-list">
      {films.map((film, i) => <FilmCard key={film.id}
        title={film.title}
        preview={film.preview}
        poster={film.poster}
        isPlaying={this.state.activeFilm === i}
        onCardMouseEnter={this._cardMouseEnterHandler.bind(this, i)}
        onCardMouseLeave={this._cardMouseLeaverHandler.bind(this)}
      />)}
    </div>;
  }

  _cardMouseEnterHandler(ind) {
    this.delayTimer = setTimeout(() => {
      this._setActiveState(ind);
    }, this.videoPlayDelay);
  }

  _cardMouseLeaverHandler() {
    if (this.delayTimer) {
      clearTimeout(this.delayTimer);
      this.delayTimer = null;
    }
    this._resetState();
  }

  _setActiveState(ind) {
    this.setState({
      activeFilm: ind,
    });
  }

  _resetState() {
    this.setState({
      activeFilm: -1,
    });
  }
}

FilmsList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
  })).isRequired,
};
