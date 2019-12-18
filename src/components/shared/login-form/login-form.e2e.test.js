import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {LoginForm} from './login-form';


Enzyme.configure({
  adapter: new Adapter(),
});

describe(`LoginForm e2e`, () => {
  it(`Callback method should call the authorize method in props`, () => {
    const authorize = jest.fn(() => new Promise(() => void (0)));
    const event = {
      preventDefault: () => void (0),
      target: {
        'email': `test@test.com`,
        'password': `123`,
      }
    };

    const wrapper = shallow(<LoginForm
      authorize={authorize}
    />);

    wrapper.instance().handleFormSubmit(event);
    expect(authorize).toHaveBeenCalledTimes(1);
  });
});
