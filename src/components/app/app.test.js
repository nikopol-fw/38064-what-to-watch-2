import React from 'react';
import renderer from 'react-test-renderer';

import {films} from './../../mocks/films';

import {App} from './app';

it(`App correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<App
      films={films}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
