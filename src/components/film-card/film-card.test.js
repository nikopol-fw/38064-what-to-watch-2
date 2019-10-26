import React from 'react';
import renderer from 'react-test-renderer';

import {films} from './../../mocks/films';

import {FilmCard} from './film-card';

it(`FilmCard correctly renders after relaunch`, () => {
  const mockFilm = films[0];
  const mockCardHoverHandler = () => {};

  const tree = renderer
    .create(<FilmCard
      title={mockFilm.title}
      img={mockFilm.img}
      onCardHover={mockCardHoverHandler}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
