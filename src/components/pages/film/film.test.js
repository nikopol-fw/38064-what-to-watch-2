import React from 'react';
import renderer from 'react-test-renderer';
import {StaticRouter} from 'react-router-dom';

import {films} from '../../../mocks/films';
import {user} from '../../../mocks/user';
import {FilmPage} from './film';


const mock = {
  film: films[0],
  films,
  user,
};

it(`FilmPage correctly renders afters relaunch`, () => {
  const tree = renderer
    .create(
        <StaticRouter>
          <FilmPage
            film={mock.film}
            films={mock.films}
            user={mock.user}
          />
        </StaticRouter>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
