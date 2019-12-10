import * as React from 'react';

import {Film} from "../../../models/Film";
import {FilmCard} from '../film-card/film-card';


interface Props {
  activeGenre: string;
  films: Film[];
  activeItem?: number;
  setActiveItem: (ind: number) => void;
  resetActiveItem: () => void;
}

export class FilmsList extends React.PureComponent<Props, null> {

  private static readonly VIDEO_PLAY_DELAY = 1000;

  private delayTimer: number = null;

  constructor(props: Props) {
    super(props);

    this.onCardMouseEnter = this.onCardMouseEnter.bind(this);
    this.onCardMouseLeaver = this.onCardMouseLeaver.bind(this);
  }

  componentWillUnmount() {
    this.clearTimer();
  }

  clearTimer() {
    if (this.delayTimer) {
      clearTimeout(this.delayTimer);
      this.delayTimer = null;
    }
  }

  onCardMouseEnter(ind) {
    this.delayTimer = window.setTimeout(() => {
      this.props.setActiveItem(ind);
    }, FilmsList.VIDEO_PLAY_DELAY);
  }

  onCardMouseLeaver() {
    this.clearTimer();
    this.props.resetActiveItem();
  }

  render() {
    const {activeGenre, films, activeItem: activeCard} = this.props;

    return <div className="catalog__movies-list">
      {activeGenre === `All genres`
        ? films
          .map((film, i) => <FilmCard key={`film-card-${i}`}
            id={film.id}
            title={film.name}
            previewImage={film.previewImage}
            previewVideoLink={film.previewVideoLink}
            isPlaying={i === activeCard}
            index={i}
            onCardMouseEnter={this.onCardMouseEnter}
            onCardMouseLeave={this.onCardMouseLeaver}
          />)
        : films
          .filter((film) => film.genre === activeGenre)
          .map((film, i) => <FilmCard key={`film-card-${i}`}
            id={film.id}
            title={film.name}
            previewImage={film.previewImage}
            previewVideoLink={film.previewVideoLink}
            isPlaying={i === activeCard}
            index={i}
            onCardMouseEnter={this.onCardMouseEnter}
            onCardMouseLeave={this.onCardMouseLeaver}
          />)}
    </div>;
  }
}
