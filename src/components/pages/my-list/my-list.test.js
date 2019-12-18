import React from 'react';
import renderer from 'react-test-renderer';
import {StaticRouter} from 'react-router-dom';

import {films} from '../../../mocks/films';
import {user} from '../../../mocks/user';
import {MyList} from './my-list';


const mock = {
  films,
  user,
  setFavorite: () => void (0),
};

it(`MyList correctly renders afters relaunch`, () => {
  const tree = renderer
    .create(
        <StaticRouter>
          <MyList
            films={mock.films}
            loadFavorites={mock.setFavorite}
            user={mock.user}
          />
        </StaticRouter>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
