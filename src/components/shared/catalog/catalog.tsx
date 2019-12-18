import * as React from 'react';
import {connect} from 'react-redux';

import {Film} from '../../../models/film';
import {getFilmsByGenre} from '../../../reducer/data/selectors';
import {withActiveItem} from '../../../hocs/with-active-item/with-active-item';
import {GenreList} from '../genre-list/genre-list';
import {FilmsList} from '../films-list/films-list';
import {ShowMoreBtn} from '../show-more-btn/show-more-btn';


const FilmsListWrapped = withActiveItem(FilmsList);

interface Props {
  films: Film[];
  genres: string[];

  activeGenre: string;
  count: number;
  setActiveGenre: (genre: string) => void;
  showMore: () => void;

  filmsWithGenre: Film[];
}

export const Catalog: React.FC<Props> = (props) => {
  const {activeGenre, count, filmsWithGenre, genres, setActiveGenre, showMore} = props;

  const slicedFilms = count ? filmsWithGenre.slice(0, count) : filmsWithGenre;

  return (
    <>
      <GenreList
        activeGenre={activeGenre}
        genres={genres}
        setActiveGenre={setActiveGenre}
      />

      <FilmsListWrapped
        films={slicedFilms}
      />

      {count < filmsWithGenre.length && (
        <ShowMoreBtn onBtnClick={showMore}/>
      )}
    </>
  );
};


const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  filmsWithGenre: getFilmsByGenre(state, ownProps.activeGenre),
});


export default connect(mapStateToProps)(Catalog);
