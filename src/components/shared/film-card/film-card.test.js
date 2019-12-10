import React from 'react';
import renderer from 'react-test-renderer';

import {films} from '../../../mocks/films';

import {FilmCard} from './film-card';


const mock = {
  film: films[0],
  isPlaying: false,
  index: 0,
  onCardMouseEnter: () => void (0),
  onCardMouseLeave: () => void (0),
};

it(`FilmCard correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<FilmCard
      title={mock.film.name}
      previewImage={mock.film.previewImage}
      previewVideoLink={mock.film.previewVideoLink}
      isPlaying={mock.isPlaying}
      index={mock.index}
      onCardMouseEnter={mock.onCardMouseEnter}
      onCardMouseLeave={mock.onCardMouseLeave}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
