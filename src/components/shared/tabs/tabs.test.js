import React from 'react';
import renderer from 'react-test-renderer';

import {films} from '../../../mocks/films';
import {Tabs} from './tabs';


const mock = {
  film: films[0],
  activeItem: 1,
  setActiveItem: () => void (0),
  resetActiveItem: () => void (0),
};

it(`Tabs correctly renders afters relaunch`, () => {
  const tree = renderer.create(
      <Tabs
        film={mock.film}
        activeItem={mock.activeItem}
        setActiveItem={mock.setActiveItem}
        resetActiveItem={mock.resetActiveItem}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
