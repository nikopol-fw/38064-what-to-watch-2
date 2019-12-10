import React from 'react';
import renderer from 'react-test-renderer';

import {films} from './../../mocks/films';

import {FilmsList} from './films-list';


const mock = {
  activeGenre: `All genres`,
  films,
  activeCard: -1,
  setActiveCard: () => void (0),
  resetActiveCard: () => void (0),
};

it(`FilmList correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<FilmsList
      activeGenre={mock.activeGenre}
      films={mock.films}
      activeCard={mock.activeCard}
      setActiveCard={mock.setActiveCard}
      resetActiveCard={mock.resetActiveCard}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
