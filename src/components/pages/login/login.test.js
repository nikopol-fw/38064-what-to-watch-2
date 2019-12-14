import React from 'react';
import renderer from 'react-test-renderer';
import {StaticRouter} from 'react-router-dom';

import {LoginPage} from './login';


const mock = {
  onAuthorize: () => void (0),
};

it(`LoginPage correctly renders after relaunch`, () => {
  const tree = renderer.create(
      <StaticRouter>
        <LoginPage onAuthorize={mock.onAuthorize}/>
      </StaticRouter>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
