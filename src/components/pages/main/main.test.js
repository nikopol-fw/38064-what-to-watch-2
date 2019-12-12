import React from 'react';
import renderer from 'react-test-renderer';
import {StaticRouter} from 'react-router-dom';

import {films} from '../../../mocks/films';
import {MainPage} from './main';


const mock = {
  activeGenre: `All genres`,
  films,
  genres: [`All genres`, `Crime`, `Adventure`, `Comedy`],
  onGenreLinkClick: () => void (0),
};


it(`MainPage correctly renders after relaunch`, () => {
  const tree = renderer
    .create(
        <StaticRouter>
          <MainPage
            activeGenre={mock.activeGenre}
            films={mock.films}
            genres={mock.genres}
            onGenreLinkClick={mock.onGenreLinkClick}
          />
        </StaticRouter>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
