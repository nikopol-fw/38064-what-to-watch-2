import * as React from "react";
import {ratingToDescription} from "../../../lib/rating-to-description/rating-to-description";


interface Props {
  description: string;
  director: string;
  rating: number;
  scoresCount: number;
  starring: string[];
}

export const TabOverview: React.FC<Props> = (props) => {

  const {description, director, rating, scoresCount, starring} = props;

  const formattedStarring = starring.join(`, `);
  const ratingStr = rating ? rating.toFixed(1).replace(`.`, `,`) : `0`;
  const ratingDescription = rating ? ratingToDescription(rating) : ``;

  return (
    <>
      <div className="movie-rating">
        <div className="movie-rating__score">{ratingStr}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{ratingDescription}</span>
          <span className="movie-rating__count">{scoresCount} ratings</span>
        </p>
      </div>

      <div className="movie-card__text">
        <p>{description}</p>

        <p className="movie-card__director"><strong>Director: {director}</strong></p>
        <p className="movie-card__starring"><strong>Starring: {formattedStarring}</strong></p>
      </div>
    </>
  );
};
