import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {withFilters} from './with-filters';


Enzyme.configure({
  adapter: new Adapter(),
});

const MockComponent = () => <div/>;
const MockComponentWrapped = withFilters(MockComponent);
const mockActiveGenre = `Drama`;

describe(`withFilters e2e`, () => {
  it(`It should set active genre correctly when call the setActiveGenre method`, () => {
    const wrapper = shallow(<MockComponentWrapped/>);

    wrapper.instance().setActiveGenre(mockActiveGenre);
    expect(wrapper.state()).toEqual({activeGenre: mockActiveGenre, count: 8});
  });

  it(`It should change count to show correctly when call the showMore method`, () => {
    const wrapper = shallow(<MockComponentWrapped/>);

    wrapper.instance().showMore();
    expect(wrapper.state().count).toEqual(28);

    wrapper.instance().showMore();
    expect(wrapper.state().count).toEqual(48);
  });
});
