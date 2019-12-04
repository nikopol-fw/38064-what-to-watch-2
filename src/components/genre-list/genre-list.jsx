import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';


class GenreList extends PureComponent {
  constructor(props) {
    super(props);
  }

  onGenreLinkClick(genre) {
    return (evt) => {
      evt.preventDefault();
      this.props.onLinkClick(genre);
    };
  }

  render() {
    const {activeGenre, genres} = this.props;

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
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLinkClick: PropTypes.func.isRequired,
};


export {GenreList};
