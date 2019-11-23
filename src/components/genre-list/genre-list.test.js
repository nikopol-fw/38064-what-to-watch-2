import React from 'react';
import renderer from 'react-test-renderer';

import {films as mockFilms} from '../../mocks/films';

import {GenreList} from './genre-list';


const mocks = {
  activeGenre: `All genres`,
};

it(`GenreList correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<GenreList
      activeGenre={mocks.activeGenre}
      films={mockFilms}
      onLinkClick={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
