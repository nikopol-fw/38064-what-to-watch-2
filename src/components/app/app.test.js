import React from 'react';
import renderer from 'react-test-renderer';

import {App} from './app';

const mockFilms = [{
  title: `Fantastic Beasts: The Crimes of Grindelwald`,
}, {
  title: `Bohemian Rhapsody`,
}, {
  title: `Macbeth`,
}, {
  title: `Aviator`,
}];

const mockHandleTitleClick = () => {
  // eslint-disable-next-line no-console
  console.log(`clicked!`);
};

it(`App correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<App
      films={mockFilms}
      onTitleClick={mockHandleTitleClick}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
