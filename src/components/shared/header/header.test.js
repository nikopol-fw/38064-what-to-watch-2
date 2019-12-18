import React from 'react';
import renderer from 'react-test-renderer';
import {StaticRouter} from 'react-router-dom';

import {user} from '../../../mocks/user';
import {Header} from './header';


const mock = {
  avatar: user.avatar,
  isAuth: true,
  name: user.name,
};

it(`Header correctly renders after relaunch`, () => {
  const tree = renderer.create(
      <StaticRouter>
        <Header
          avatar={mock.avatar}
          isAuth={mock.isAuth}
          name={mock.name}
        />
      </StaticRouter>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
