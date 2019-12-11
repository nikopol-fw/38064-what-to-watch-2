import * as React from "react";
import {connect} from "react-redux";

import {Review} from "../../../models/Review";
import {formatDate} from "../../../lib/format-date/format-date";
import {formatRating} from "../../../lib/format-rating/format-rating";
import {Operation} from "../../../reducer/data/data";
import {getReviews} from "../../../reducer/data/selectors";


interface Props {
  filmId: number;
  loadReviews: (ind: number) => Promise<any>;
  reviews: Review[];
}

export class TabReviews extends React.PureComponent<Props> {

  static readonly defaultProps = {
    filmId: null,
    reviews: [],
  };

  constructor(props: Props) {
    super(props);

    this.props.loadReviews(this.props.filmId);
  }

  render() {
    const {reviews} = this.props;

    return (
      <div className="movie-card__reviews movie-card__row">
        <div className="movie-card__reviews-col">
          {reviews.map((review, i) => (
            <div className="review" key={`review-${i}`}>
              <blockquote className="review__quote">
                <p className="review__text">{review.comment}</p>

                <footer className="review__details">
                  <cite className="review__author">{review.user.name}</cite>
                  <time className="review__date" dateTime={formatDate(review.date, `YYYY-MM-DD`)}>
                    {formatDate(review.date, `MMMM DD, YYYY`)}
                  </time>
                </footer>
              </blockquote>

              <div className="review__rating">{formatRating(review.rating)}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  reviews: getReviews(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadReviews: (filmId: number) => dispatch(Operation.loadReviews(filmId)),
});


export default connect(mapStateToProps, mapDispatchToProps)(TabReviews);
