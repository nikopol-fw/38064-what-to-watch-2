import React from 'react';
import renderer from 'react-test-renderer';
import {StaticRouter} from 'react-router-dom';

import {LoginPage} from './login';


const mock = {
  authorize: () => void (0),
};

it(`LoginPage correctly renders after relaunch`, () => {
  const tree = renderer.create(
      <StaticRouter>
        <LoginPage authorize={mock.authorize}/>
      </StaticRouter>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
