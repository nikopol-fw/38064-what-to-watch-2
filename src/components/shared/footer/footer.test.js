import React from 'react';
import renderer from 'react-test-renderer';
import {StaticRouter} from 'react-router-dom';

import {Footer} from './footer';


it(`Footer correctly renders after relaunch`, () => {
  const tree = renderer.create(
      <StaticRouter>
        <Footer/>
      </StaticRouter>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
