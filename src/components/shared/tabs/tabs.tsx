import * as React from "react";

import {Film} from "../../../models/Film";

import {TabOverview} from "../tab-overview/tab-overview";
import {TabDetails} from "../tab-details/tab-details";
import TabReviews from "../tab-reviews/tab-reviews";


enum Tab {
  OVERVIEW = `Overview`,
  DETAILS = `Details`,
  REVIEWS = `Reviews`,
}

interface Props {
  film: Film;

  activeItem: number;
  setActiveItem: (ind: number) => void;
  resetActiveItem: () => void;
}

export class Tabs extends React.PureComponent<Props> {

  constructor(props: Props) {
    super(props);

    this.props.setActiveItem(0);
  }

  getClickTabHandler(ind: number) {
    return (evt) => {
      evt.preventDefault();
      this.props.setActiveItem(ind);
    };
  }

  render() {
    const {activeItem: activeTab, film} = this.props;
    const TabsValues = Object.values(Tab);

    return (
      <div className="movie-card__desc">
        <nav className="movie-nav movie-card__nav">
          <ul className="movie-nav__list">
            {TabsValues.map((tab, i) => (
              <li className={`movie-nav__item${activeTab === i ? ` movie-nav__item--active` : ``}`}
                key={`tab-${i}`}>
                <a href="#" className="movie-nav__link"
                  onClick={this.getClickTabHandler(i)}>{tab}</a>
              </li>
            ))}
          </ul>
        </nav>

        {(() => {
          switch (TabsValues[activeTab]) {
            case Tab.OVERVIEW:
              return (
                <TabOverview
                  description={film.description}
                  director={film.director}
                  rating={film.rating}
                  scoresCount={film.scoresCount}
                  starring={film.starring}
                />
              );

            case Tab.DETAILS:
              return (
                <TabDetails
                  director={film.director}
                  genre={film.genre}
                  released={film.released}
                  runTime={film.runTime}
                  starring={film.starring}
                />
              );

            case Tab.REVIEWS:
              return (
                <TabReviews
                  filmId={film.id}
                />
              );

            default:
              return null;
          }
        })()}
      </div>
    );
  }
}
