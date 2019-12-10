import * as React from 'react';
import {connect} from "react-redux";

import {Film} from "../../../models/Film";
import {User} from "../../../models/User";
import {getFilmById} from "../../../reducer/data/selectors";
import {getUserInfo} from "../../../reducer/user/selectors";
import {withActiveItem} from "../../../hocs/with-active-item/with-active-item";
import {Footer} from "../../shared/footer/footer";
import {Header} from "../../shared/header/header";
import {Tabs} from "../../shared/tabs/tabs";


const TabsWrapped = withActiveItem(Tabs);

interface Props {
  film: Film;
  user: User;
}

export const FilmPage: React.FC<Props> = (props) => {
  const {film, user} = props;

  return <React.Fragment>
    <section className="movie-card movie-card--full"
      style={{backgroundColor: film.backgroundColor}}>
      <div className="movie-card__hero">
        <div className="movie-card__bg">
          <img src={film.backgroundImage} alt={film && film.name}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header avatar={user.avatar} isAuth={!!(user.id)} name={user.name}/>

        <div className="movie-card__wrap">
          <div className="movie-card__desc">
            <h2 className="movie-card__title">{film.name}</h2>
            <p className="movie-card__meta">
              <span className="movie-card__genre">{film.genre}</span>
              <span className="movie-card__year">{film.released}</span>
            </p>

            <div className="movie-card__buttons">
              <button className="btn btn--play movie-card__button" type="button">
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"/>
                </svg>
                <span>Play</span>
              </button>
              <button className="btn btn--list movie-card__button" type="button">
                <svg viewBox="0 0 19 20" width="19" height="20">
                  <use xlinkHref="#add"/>
                </svg>
                <span>My list</span>
              </button>
              <a href="add-review.html" className="btn movie-card__button">Add review</a>
            </div>
          </div>
        </div>
      </div>

      <div className="movie-card__wrap movie-card__translate-top">
        <div className="movie-card__info">
          <div className="movie-card__poster movie-card__poster--big">
            <img src={film.posterImage} alt={`${film.name} poster`} width="218" height="327"/>
          </div>

          <TabsWrapped film={film}/>
        </div>
      </div>
    </section>

    <div className="page-content">
      <section className="catalog catalog--like-this">
        <h2 className="catalog__title">More like this</h2>

        <div className="catalog__movies-list">
          <article className="small-movie-card catalog__movies-card">
            <div className="small-movie-card__image">
              <img src="img/fantastic-beasts-the-crimes-of-grindelwald.jpg"
                alt="Fantastic Beasts: The Crimes of Grindelwald" width="280" height="175"/>
            </div>
            <h3 className="small-movie-card__title">
              <a className="small-movie-card__link" href="movie-page.html">Fantastic Beasts: The Crimes of
                Grindelwald</a>
            </h3>
          </article>

          <article className="small-movie-card catalog__movies-card">
            <div className="small-movie-card__image">
              <img src="img/bohemian-rhapsody.jpg" alt="Bohemian Rhapsody" width="280" height="175"/>
            </div>
            <h3 className="small-movie-card__title">
              <a className="small-movie-card__link" href="movie-page.html">Bohemian Rhapsody</a>
            </h3>
          </article>

          <article className="small-movie-card catalog__movies-card">
            <div className="small-movie-card__image">
              <img src="img/macbeth.jpg" alt="Macbeth" width="280" height="175"/>
            </div>
            <h3 className="small-movie-card__title">
              <a className="small-movie-card__link" href="movie-page.html">Macbeth</a>
            </h3>
          </article>

          <article className="small-movie-card catalog__movies-card">
            <div className="small-movie-card__image">
              <img src="img/aviator.jpg" alt="Aviator" width="280" height="175"/>
            </div>
            <h3 className="small-movie-card__title">
              <a className="small-movie-card__link" href="movie-page.html">Aviator</a>
            </h3>
          </article>
        </div>
      </section>

      <Footer/>
    </div>
  </React.Fragment>;
};

FilmPage.defaultProps = {
  film: {
    backgroundColor: null,
    backgroundImage: null,
    description: ``,
    director: ``,
    genre: ``,
    id: null,
    isFavorite: false,
    name: ``,
    posterImage: ``,
    previewImage: ``,
    previewVideoLink: ``,
    rating: null,
    released: null,
    runTime: null,
    scoresCount: 0,
    starring: [``],
    videoLink: ``,
  }
};


const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  film: getFilmById(state, +ownProps.match.params.id),
  user: getUserInfo(state),
});


export default connect(mapStateToProps)(FilmPage);
