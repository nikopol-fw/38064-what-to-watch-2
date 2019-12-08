import * as React from 'react';


interface Props {
  activeGenre: string;
  genres: string[];
  onLinkClick: (genre: string) => void;
}

class GenreList extends React.PureComponent<Props> {

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


export {GenreList};
