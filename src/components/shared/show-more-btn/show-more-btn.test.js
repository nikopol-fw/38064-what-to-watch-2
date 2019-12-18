import React from 'react';
import renderer from 'react-test-renderer';

import {ShowMoreBtn} from './show-more-btn';


const mock = {
  onBtnClick: () => void (0),
};

it(`ShowMoreBtn correctly renders afters relaunch`, () => {
  const tree = renderer.create(
      <ShowMoreBtn
        onBtnClick={mock.onBtnClick}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
