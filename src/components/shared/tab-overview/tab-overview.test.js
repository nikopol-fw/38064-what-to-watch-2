import React from 'react';
import renderer from 'react-test-renderer';

import {films} from '../../../mocks/films';
import {TabOverview} from './tab-overview';


const mock = {
  description: films[0].description,
  director: films[0].director,
  rating: films[0].rating,
  scoresCount: films[0].scoresCount,
  starring: films[0].starring,
};

it(`TabOverview correctly renders afters relaunch`, () => {
  const tree = renderer.create(
      <TabOverview
        description={mock.description}
        director={mock.director}
        rating={mock.rating}
        scoresCount={mock.scoresCount}
        starring={mock.starring}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
