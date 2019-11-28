import React from 'react';
import renderer from 'react-test-renderer';

import {films} from './../../mocks/films';

import {FilmCard} from './film-card';


const mock = {
  film: films[0],
  isPlaying: false,
  index: 13,
  onCardMouseEnter: () => {},
  onCardMouseLeave: () => {},
};

it(`FilmCard correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<FilmCard
      title={mock.film.title}
      preview={mock.film.preview}
      poster={mock.film.poster}
      isPlaying={mock.isPlaying}
      index={mock.index}
      onCardMouseEnter={mock.onCardMouseEnter}
      onCardMouseLeave={mock.onCardMouseLeave}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
