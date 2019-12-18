import React from 'react';
import renderer from 'react-test-renderer';

import {PlayerProgress} from './player-progress';


const mock = {
  percentage: 50,
  timingString: `00:07:47`,
};

it(`PlayerProgress correctly renders afters relaunch`, () => {
  const tree = renderer.create(
      <PlayerProgress
        percentage={mock.percentage}
        timingString={mock.timingString}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
