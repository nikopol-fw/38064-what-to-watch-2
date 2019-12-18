import React from 'react';
import renderer from 'react-test-renderer';
import {StaticRouter} from 'react-router-dom';

import {films} from '../../../mocks/films';
import {user} from '../../../mocks/user';
import {AddReview} from './add-review';


const mock = {
  film: films[0],
  user,
  sendReview: () => void (0),
};

it(`AddReview correctly renders after relaunch`, () => {
  const tree = renderer.create(
      <StaticRouter>
        <AddReview
          film={mock.film}
          user={mock.user}
          sendReview={mock.sendReview}
        />
      </StaticRouter>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
