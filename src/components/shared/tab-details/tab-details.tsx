import * as React from "react";

import {timeToHoursMinutes} from "../../../lib/timeToHoursMinutes/time-to-hours-minutes";


interface Props {
  director: string;
  genre: string;
  released: number;
  runTime: number;
  starring: string[];
}

export const TabDetails: React.FC<Props> = (props) => {
  const {director, genre, released, runTime, starring} = props;

  const formattedStarring = starring.join(`,<br>`);
  const formattedRunTime = timeToHoursMinutes(runTime);

  return (
    <div className="movie-card__text movie-card__row">
      <div className="movie-card__text-col">
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Director</strong>
          <span className="movie-card__details-value">{director}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Starring</strong>
          <span className="movie-card__details-value"
            dangerouslySetInnerHTML={{__html: formattedStarring}}/>
        </p>
      </div>

      <div className="movie-card__text-col">
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Run Time</strong>
          <span className="movie-card__details-value">{formattedRunTime}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Genre</strong>
          <span className="movie-card__details-value">{genre}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Released</strong>
          <span className="movie-card__details-value">{released}</span>
        </p>
      </div>
    </div>
  );
};
