import React from 'react';
import renderer from 'react-test-renderer';

import {films as mockFilms} from './../../mocks/films';

import {FilmsList} from './films-list';

it(`FilmList correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<FilmsList
      films={mockFilms}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
