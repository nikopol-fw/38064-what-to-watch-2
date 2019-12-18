import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {withActiveItem} from './with-active-item';


Enzyme.configure({
  adapter: new Adapter(),
});

const MockComponent = () => <div/>;
const MockComponentWrapped = withActiveItem(MockComponent);
const mockActiveItem = 1;

describe(`withActiveItem e2e`, () => {
  it(`It should change active item correctly when call the setActiveItem method`, () => {
    const wrapper = shallow(<MockComponentWrapped/>);

    wrapper.instance().setActiveItem(mockActiveItem);
    expect(wrapper.state().activeItem).toEqual(mockActiveItem);
  });

  it(`It should reset active item correctly when call the resetState method`, () => {
    const wrapper = shallow(<MockComponentWrapped/>);

    wrapper.instance().setActiveItem(mockActiveItem);
    wrapper.instance().resetState();
    expect(wrapper.state().activeItem).toEqual(-1);
  });
});
