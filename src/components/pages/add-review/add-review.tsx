import * as React from 'react';
import {connect} from "react-redux";

import {User} from "../../../models/User";
import {Header} from "../../shared/header/header";
import {getUserInfo} from "../../../reducer/user/selectors";
import {Film} from "../../../models/Film";
import {getFilmById} from "../../../reducer/data/selectors";
import {FormEvent} from "react";


interface Props {
  film: Film;
  user: User;
}

export class AddReview extends React.PureComponent<Props> {

  static readonly defaultProps = {
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
    },
  };

  constructor(props) {
    super(props);

    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onFormSubmit(evt: FormEvent<HTMLFormElement>) {
    evt.preventDefault();


  }

  render() {
    const {film, user} = this.props;

    return (
      <section className="movie-card movie-card--full"
        style={{backgroundColor: film.backgroundColor}}>
        <div className="movie-card__header">
          <div className="movie-card__bg">
            <img src={film.backgroundImage} alt="The Grand Budapest Hotel"/>
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <Header avatar={user.avatar} isAuth={!!(user.id)} name={user.name} />

          <div className="movie-card__poster movie-card__poster--small">
            <img src={film.posterImage} alt={film.name} width="218" height="327"/>
          </div>
        </div>

        <div className="add-review">
          <form action="#" className="add-review__form" onSubmit={this.onFormSubmit}>
            <div className="rating">
              <div className="rating__stars">
                <input className="rating__input" id="star-1" type="radio" name="rating" value="1"/>
                <label className="rating__label" htmlFor="star-1">Rating 1</label>

                <input className="rating__input" id="star-2" type="radio" name="rating" value="2"/>
                <label className="rating__label" htmlFor="star-2">Rating 2</label>

                <input className="rating__input" id="star-3" type="radio" name="rating" value="3" defaultChecked/>
                <label className="rating__label" htmlFor="star-3">Rating 3</label>

                <input className="rating__input" id="star-4" type="radio" name="rating" value="4"/>
                <label className="rating__label" htmlFor="star-4">Rating 4</label>

                <input className="rating__input" id="star-5" type="radio" name="rating" value="5"/>
                <label className="rating__label" htmlFor="star-5">Rating 5</label>
              </div>
            </div>

            <div className="add-review__text">
              <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text"/>
              <div className="add-review__submit">
                <button className="add-review__btn" type="submit">Post</button>
              </div>

            </div>
          </form>
        </div>

      </section>
    );
  }
}


const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  film: getFilmById(state, +ownProps.match.params.id),
  user: getUserInfo(state),
});


export default connect(mapStateToProps)(AddReview);
