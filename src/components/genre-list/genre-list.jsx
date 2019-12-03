import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';


class GenreList extends PureComponent {
  constructor(props) {
    super(props);
  }

  getGenres(films) {
    const genresSet = new Set();

    films.forEach((film) => {
      genresSet.add(film.genre);
    });

    const genres = Array.from(genresSet);
    genres.sort();
    genres.unshift(`All genres`);

    return genres;
  }

  onGenreLinkClick(genre) {
    return (evt) => {
      evt.preventDefault();
      this.props.onLinkClick(genre);
    };
  }

  render() {
    const {activeGenre} = this.props;
    const genres = this.getGenres(this.props.films);

    return <ul className="catalog__genres-list">
      {genres.map((genre, i) => (
        <li className={`catalog__genres-item${genre === activeGenre ? ` catalog__genres-item--active` : ``}`}
          key={`filter-genre-${i}`}>
          <a href="#" className="catalog__genres-link"
            onClick={this.onGenreLinkClick(genre)}>{genre}</a>
        </li>
      ))}
    </ul>;
  }
}


GenreList.propTypes = {
  activeGenre: PropTypes.string.isRequired,
  films: PropTypes.arrayOf(PropTypes.shape({
    genre: PropTypes.string.isRequired,
  })).isRequired,
  onLinkClick: PropTypes.func.isRequired,
};


export {GenreList};
