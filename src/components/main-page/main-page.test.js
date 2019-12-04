import React from 'react';
import renderer from 'react-test-renderer';

import {films} from '../../mocks/films';

import {MainPage} from './main-page';


const mock = {
  activeGenre: `All genres`,
  films,
  genres: [`All genres`, `Crime`, `Adventure`, `Comedy`],
  onGenreLinkClick: () => {},
};


it(`MainPage correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<MainPage
      activeGenre={mock.activeGenre}
      films={mock.films}
      genres={mock.genres}
      onGenreLinkClick={mock.onGenreLinkClick}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
