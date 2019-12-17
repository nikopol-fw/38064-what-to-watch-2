import * as React from 'react';

import {Film} from '../../../models/film';
import {withPlayOnHover} from '../../../hocs/with-play-on-hover/with-play-on-hover';
import {FilmCard} from '../film-card/film-card';


const FilmCardWrapped = withPlayOnHover(FilmCard);

interface Props {
  films: Film[];

  activeItem?: number;
  setActiveItem: (ind: number) => void;
  resetActiveItem: () => void;
}

export class FilmsList extends React.PureComponent<Props, null> {

  private delayTimer: number = null;

  private static readonly VIDEO_PLAY_DELAY = 1000;

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
    const {films, activeItem: activeCard} = this.props;

    return (
      <div className="catalog__movies-list">
        {films.map((film, i) => <FilmCardWrapped key={`film-card-${i}`}
          id={film.id}
          title={film.name}
          previewImage={film.previewImage}
          previewVideoLink={film.previewVideoLink}
          isPlaying={i === activeCard}
          index={i}
          onCardMouseEnter={this.onCardMouseEnter}
          onCardMouseLeave={this.onCardMouseLeaver}
        />)}
      </div>
    );
  }
}
