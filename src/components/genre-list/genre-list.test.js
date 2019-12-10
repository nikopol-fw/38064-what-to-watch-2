import React from 'react';
import renderer from 'react-test-renderer';

import {GenreList} from './genre-list';


const mock = {
  activeGenre: `All genres`,
  genres: [`All genres`, `Crime`, `Adventure`, `Comedy`],
  onLinkClick: () => void (0),
};


it(`GenreList correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<GenreList
      activeGenre={mock.activeGenre}
      genres={mock.genres}
      onLinkClick={mock.onLinkClick}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
