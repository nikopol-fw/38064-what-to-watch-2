import React from 'react';
import renderer from 'react-test-renderer';

import {films} from './../../mocks/films';

import {FilmCard} from './film-card';


it(`FilmCard correctly renders after relaunch`, () => {
  const mockFilm = films[0];
  const isPlaying = false;
  const cardMouseEnterHandler = () => {};
  const cardMouseLeaveHandler = () => {};

  const tree = renderer
    .create(<FilmCard
      title={mockFilm.title}
      preview={mockFilm.preview}
      poster={mockFilm.poster}
      isPlaying={isPlaying}
      onCardMouseEnter={cardMouseEnterHandler}
      onCardMouseLeave={cardMouseLeaveHandler}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
