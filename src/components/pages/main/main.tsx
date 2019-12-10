import * as React from 'react';
import {connect} from 'react-redux';

import {Film} from "../../../models/Film";
import {ActionCreator} from '../../../reducer/user/user';
import {getActiveGenre} from '../../../reducer/user/selectors';
import {getFilms, getGenres} from '../../../reducer/data/selectors';
import {withActiveItem} from '../../../hocs/with-active-item/with-active-item';
import {FilmsList} from '../../shared/films-list/films-list';
import {GenreList} from '../../shared/genre-list/genre-list';


const FilmsListWrapped = withActiveItem(FilmsList);

interface Props {
  activeGenre: string;
  films: Film[];
  genres: string[];
  onGenreLinkClick: () => void;
}

export class MainPage extends React.PureComponent<Props> {

  constructor(props: Props) {
    super(props);
  }

  render() {
    const {activeGenre, films, genres, onGenreLinkClick} = this.props;

    return (
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
    );
  }
}


const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  activeGenre: getActiveGenre(state),
  genres: getGenres(state),
  films: getFilms(state),
});

const mapDispatchToProps = (dispatch) => ({
  onGenreLinkClick: (genre) => dispatch(ActionCreator.changeGenre(genre)),
});


export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
