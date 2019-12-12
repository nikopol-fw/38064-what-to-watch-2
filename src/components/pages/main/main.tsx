import * as React from 'react';
import {connect} from 'react-redux';

import {Film} from "../../../models/Film";
import {getFilms, getGenres, getPromo} from '../../../reducer/data/selectors';
import Catalog from "../../shared/catalog/catalog";
import {withFilters} from "../../../hocs/with-filters/with-filters";
import {Operation} from "../../../reducer/data/data";
import {User} from "../../../models/User";
import {Header} from "../../shared/header/header";
import {Footer} from "../../shared/footer/footer";


const CatalogWrapped = withFilters(Catalog);

interface Props {
  films: Film[];
  genres: string[];

  loadPromo: () => Promise<any>;
  promo: Film;
  setFavorite: (filmId: number, status: (0 | 1)) => Promise<any>;
  user: User;
}

export class MainPage extends React.PureComponent<Props> {

  static readonly defaultProps = {
    films: [],
    genres: [],
  };

  constructor(props: Props) {
    super(props);

    this.clickFavoriteHandler = this.clickFavoriteHandler.bind(this);

    props.loadPromo();
  }

  clickFavoriteHandler() {
    this.props.setFavorite(
        this.props.promo.id,
        this.props.promo.isFavorite ? 0 : 1
    );
  }

  render() {
    const {films, genres, promo, user} = this.props;

    return (
      <>
        <section className="movie-card">
          <div className="movie-card__bg">
            <img src={promo && promo.backgroundImage} alt={promo && promo.name}/>
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <Header avatar={user.avatar} isAuth={!!(user && user.id)} name={user.name}/>

          <div className="movie-card__wrap">
            <div className="movie-card__info">
              <div className="movie-card__poster">
                <img src={promo && promo.posterImage} alt={promo && promo.name} width="218" height="327"/>
              </div>

              <div className="movie-card__desc">
                <h2 className="movie-card__title">{promo && promo.name}</h2>
                <p className="movie-card__meta">
                  <span className="movie-card__genre">{promo && promo.genre}</span>
                  <span className="movie-card__year">{promo && promo.released}</span>
                </p>

                <div className="movie-card__buttons">
                  {promo && (
                    <>
                      <button className="btn btn--play movie-card__button" type="button">
                        <svg viewBox="0 0 19 19" width="19" height="19">
                          <use xlinkHref="#play-s"/>
                        </svg>
                        <span>Play</span>
                      </button>

                      <button className="btn btn--list movie-card__button" type="button"
                        onClick={this.clickFavoriteHandler}>
                        <svg viewBox="0 0 19 20" width="19" height="20">
                          <use xlinkHref={promo.isFavorite ? `#in-list` : `#add`}/>
                        </svg>
                        <span>My list</span>
                      </button>
                    </>
                  )}
                </div>
              </div>

            </div>
          </div>
        </section>


        <div className="page-content">
          <section className="catalog">
            <h2 className="catalog__title visually-hidden">Catalog</h2>

            <CatalogWrapped
              films={films}
              genres={genres}
            />
          </section>
          <Footer/>
        </div>
      </>
    );
  }
}


const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  films: getFilms(state),
  genres: getGenres(state),
  promo: getPromo(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadPromo: () => dispatch(Operation.loadPromo()),
  setFavorite: (filmId: number, status: (0 | 1)) => dispatch(Operation.setFavoriteStatus(filmId, status)),
});


export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
