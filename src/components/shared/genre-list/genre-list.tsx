import * as React from 'react';


interface Props {
  activeGenre: string;
  genres: string[];
  setActiveGenre: (genre: string) => void;
}

export class GenreList extends React.PureComponent<Props> {

  private getGenreLinkClickHandler(genre) {
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
            onClick={this.getGenreLinkClickHandler(genre)}>{genre}</a>
        </li>
      ))}
    </ul>;
  }
}
