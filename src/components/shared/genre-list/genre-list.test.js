import React from 'react';
import renderer from 'react-test-renderer';

import {genres} from '../../../mocks/genres';
import {GenreList} from './genre-list';


const mock = {
  activeGenre: genres[0],
  genres,
  setActiveGenre: () => void (0),
};

it(`GenreList correctly renders after relaunch`, () => {
  const tree = renderer.create(
      <GenreList
        activeGenre={mock.activeGenre}
        genres={mock.genres}
        setActiveGenre={mock.setActiveGenre}
      />).toJSON();

  expect(tree).toMatchSnapshot();
});
