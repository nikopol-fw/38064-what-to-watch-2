import * as React from 'react';
import {connect} from 'react-redux';

import {ActionCreator} from '../../../reducer/user/user';
import {getFilms, getGenres} from '../../../reducer/data/selectors';
import {getActiveGenre} from '../../../reducer/user/selectors';

import {withActiveItem} from '../../../hocs/with-active-item/with-active-item';
import {FilmsList} from '../../films-list/films-list';
import {GenreList} from '../../genre-list/genre-list';


const FilmsListWrapped = withActiveItem(FilmsList);

interface Props {
  activeGenre: string;
  films: [];
  genres: string[];
  onGenreLinkClick: () => void;
}

export const MainPage: React.FC<Props> = (props) => {
  const {activeGenre, films, genres, onGenreLinkClick} = props;

  return <div>
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <GenreList
        activeGenre={activeGenre}
        genres={genres}
        onLinkClick={onGenreLinkClick}
      />

      <FilmsListWrapped
        activeGenre={activeGenre}
        films={films}
      />

      <div className="catalog__more">
        <button className="catalog__button" type="button">Show more</button>
      </div>
    </section>

    <footer className="page-footer">
      <div className="logo">
        <a className="logo__link logo__link--light">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </a>
      </div>

      <div className="copyright">
        <p>© 2019 What to watch Ltd.</p>
      </div>
    </footer>
  </div>;
};


const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  activeGenre: getActiveGenre(state),
  genres: getGenres(state),
  films: getFilms(state),
});

const mapDispatchToProps = (dispatch) => ({
  onGenreLinkClick: (genre) => dispatch(ActionCreator.changeGenre(genre)),
});


export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
