import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {withValidation} from './with-validation';


Enzyme.configure({
  adapter: new Adapter(),
});

const MockComponent = () => <div/>;
const MockComponentWrapped = withValidation(MockComponent);
const mockFilmId = 1;
const mockSendReview = jest.fn(() => new Promise(() => void (0)));

describe(`withValidation e2e`, () => {
  const wrapper = shallow(
      <MockComponentWrapped
        filmId={mockFilmId}
        sendReview={mockSendReview}
      />);

  it(`It should change the isSubmitDisabled flag correctly when input changed`, () => {
    const event = {
      preventDefault: jest.fn(),
      target: {
        'rating': 3,
        'review-text': `Simple text`,
      }
    };

    wrapper.instance().onFormSubmit(event);
    expect(wrapper.state().isDisabled).toEqual(true);
  });
});
