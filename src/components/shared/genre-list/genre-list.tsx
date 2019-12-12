import * as React from 'react';


interface Props {
  activeGenre: string;
  genres: string[];
  setActiveGenre: (genre: string) => void;
}

class GenreList extends React.PureComponent<Props> {

  getClickGenreLinkHandler(genre) {
    return (evt) => {
      evt.preventDefault();
      this.props.setActiveGenre(genre);
    };
  }

  render() {
    const {activeGenre, genres} = this.props;

    return <ul className="catalog__genres-list">
      {genres.map((genre, i) => (
        <li className={`catalog__genres-item${genre === activeGenre ? ` catalog__genres-item--active` : ``}`}
          key={`filter-genre-${i}`}>
          <a href="#" className="catalog__genres-link"
            onClick={this.getClickGenreLinkHandler(genre)}>{genre}</a>
        </li>
      ))}
    </ul>;
  }
}


export {GenreList};
