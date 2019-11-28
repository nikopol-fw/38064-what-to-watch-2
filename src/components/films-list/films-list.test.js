import React from 'react';
import renderer from 'react-test-renderer';

import {films as mockFilms} from './../../mocks/films';

import {FilmsList} from './films-list';


const mock = {
  activeGenre: `All genres`,
  setActiveCard: () => {},
  resetActiveCard: () => {},
};

it(`FilmList correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<FilmsList
      activeGenre={mock.activeGenre}
      films={mockFilms}
      setActiveCard={mock.setActiveCard}
      resetActiveCard={mock.resetActiveCard}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
