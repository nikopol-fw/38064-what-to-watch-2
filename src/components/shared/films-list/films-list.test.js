import React from 'react';
import renderer from 'react-test-renderer';

import {films} from '../../../mocks/films';

import {FilmsList} from './films-list';
import {StaticRouter} from 'react-router-dom';


const mock = {
  activeGenre: `All genres`,
  films,
  activeCard: -1,
  setActiveCard: () => void (0),
  resetActiveCard: () => void (0),
};

it(`FilmList correctly renders after relaunch`, () => {
  const tree = renderer
    .create(
        <StaticRouter>
          <FilmsList
            films={mock.films}
            activeItem={mock.activeCard}
            setActiveItem={mock.setActiveCard}
            resetActiveItem={mock.resetActiveCard}
          />
        </StaticRouter>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
