import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJSON from 'enzyme-to-json';

import {App} from './app';


Enzyme.configure({
  adapter: new Adapter(),
});

it(`App correctly renders after relaunch`, () => {
  const tree = shallow(<App
    user={null}
  />);
  expect(toJSON(tree)).toMatchSnapshot();
});
