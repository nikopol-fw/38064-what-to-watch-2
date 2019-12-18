import React from 'react';
import renderer from 'react-test-renderer';

import {ReviewForm} from './review-form';


const mock = {
  isDisabled: false,
  isSubmitDisabled: false,
  onFormChange: () => void (0),
  onFormSubmit: () => void (0),
};

it(`ReviewForm correctly renders afters relaunch`, () => {
  const tree = renderer.create(
      <ReviewForm
        isDisabled={mock.isDisabled}
        isSubmitDisabled={mock.isSubmitDisabled}
        onFormChange={mock.onFormChange}
        onFormSubmit={mock.onFormSubmit}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
