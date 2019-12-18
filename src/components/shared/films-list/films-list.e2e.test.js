import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {films} from '../../../mocks/films';
import {FilmsList} from './films-list';


Enzyme.configure({
  adapter: new Adapter(),
});

const mock = {
  films,
  isPlaying: false,
  index: 0,
};

describe(`FilmsList e2e`, () => {
  it(`Callback method should call the setActiveItem method in props`, () => {
    const setActiveItem = jest.fn();

    const wrapper = shallow(<FilmsList
      films={mock.films}
      setActiveItem={setActiveItem}
    />);

    wrapper.instance().onCardMouseEnter(1);
    setTimeout(() => {
      expect(setActiveItem).toHaveBeenCalledTimes(1);
    }, 1000);
  });
});
