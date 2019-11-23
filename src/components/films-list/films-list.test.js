import React from 'react';
import renderer from 'react-test-renderer';

import {films as mockFilms} from './../../mocks/films';

import {FilmsList} from './films-list';


const mocks = {
  activeGenre: `All genres`,
};

it(`FilmList correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<FilmsList
      activeGenre={mocks.activeGenre}
      films={mockFilms}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
