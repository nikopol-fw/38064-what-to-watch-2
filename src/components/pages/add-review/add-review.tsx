import * as React from 'react';
import {connect} from "react-redux";

import {Film} from "../../../models/film";
import {User} from "../../../models/user";
import {getFilmById} from "../../../reducer/data/selectors";
import {getUserInfo} from "../../../reducer/user/selectors";
import {withValidation} from "../../../hocs/with-validation/with-validation";
import {Header} from "../../shared/header/header";
import {ReviewForm} from "../../shared/review-form/review-form";
import {Operation} from "../../../reducer/data/data";
import {FormReview} from "../../../models/form-review";
import {Link} from "react-router-dom";


const ReviewFormWrapped = withValidation(ReviewForm);

interface Props {
  film: Film;
  user: User;
  sendReview: () => Promise<any>;
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

  render() {
    const {film, user, sendReview} = this.props;

    return (
      <section className="movie-card movie-card--full"
        style={{backgroundColor: film.backgroundColor}}>
        <div className="movie-card__header">
          <div className="movie-card__bg">
            <img src={film.backgroundImage} alt="The Grand Budapest Hotel"/>
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <Header avatar={user.avatar} isAuth={!!(user.id)} name={user.name}>
            <nav className="breadcrumbs">
              <ul className="breadcrumbs__list">
                <li className="breadcrumbs__item">
                  <Link to={`/films/${film.id}`} className="breadcrumbs__link">{film.name}</Link>
                </li>
                <li className="breadcrumbs__item">
                  <a className="breadcrumbs__link">Add review</a>
                </li>
              </ul>
            </nav>
          </Header>

          <div className="movie-card__poster movie-card__poster--small">
            <img src={film.posterImage} alt={film.name} width="218" height="327"/>
          </div>
        </div>

        <div className="add-review">
          <ReviewFormWrapped
            filmId={film.id}
            sendReview={sendReview}
          />
        </div>

      </section>
    );
  }
}


const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  film: getFilmById(state, +ownProps.match.params.id),
  user: getUserInfo(state),
});

const mapDispatchToProps = (dispatch) => ({
  sendReview: (filmId: number | string, formData: FormReview) => dispatch(Operation.sendReview(filmId, formData)),
});


export default connect(mapStateToProps, mapDispatchToProps)(AddReview);
