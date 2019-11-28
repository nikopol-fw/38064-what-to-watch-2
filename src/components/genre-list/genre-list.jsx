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

  render() {
    const {activeGenre, onLinkClick} = this.props;
    const genres = this.getGenres(this.props.films);

    return <ul className="catalog__genres-list">
      {genres.map((genre, i) => (
        <li className={`catalog__genres-item${genre === activeGenre ? ` catalog__genres-item--active` : ``}`}
          key={`filter-genre-${i}`}>
          <a href="#" className="catalog__genres-link"
            onClick={(evt) => {
              evt.preventDefault();
              onLinkClick(genre);
            }}>{genre}</a>
        </li>
      ))}
    </ul>;
  }
}


GenreList.propTypes = {
  activeGenre: PropTypes.oneOf(
      [`All genres`, `Fantasy`, `Drama`, `Detective`]
  ).isRequired,
  films: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
  })).isRequired,
  onLinkClick: PropTypes.func.isRequired,
};


export {GenreList};
