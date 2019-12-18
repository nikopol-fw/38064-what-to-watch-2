import React from 'react';
import renderer from 'react-test-renderer';

import {LoginForm} from "./login-form";


const mock = {
  authorize: () => void (0),
};

it(`LoginForm correctly renders afters relaunch`, () => {
  const tree = renderer.create(
      <LoginForm
        authorize={mock.authorize}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
