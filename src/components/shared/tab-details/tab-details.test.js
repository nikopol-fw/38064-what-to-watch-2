import React from 'react';
import renderer from 'react-test-renderer';

import {films} from '../../../mocks/films';
import {TabDetails} from './tab-details';


const mock = {
  director: films[0].director,
  genre: films[0].genre,
  released: films[0].released,
  runTime: films[0].runTime,
  starring: films[0].starring,
};

it(`TabDetails correctly renders afters relaunch`, () => {
  const tree = renderer.create(
      <TabDetails
        director={mock.director}
        genre={mock.genre}
        released={mock.released}
        runTime={mock.runTime}
        starring={mock.starring}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
