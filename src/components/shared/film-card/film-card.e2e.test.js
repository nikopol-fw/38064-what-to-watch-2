import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {films} from '../../../mocks/films';
import {FilmCard} from './film-card';


Enzyme.configure({
  adapter: new Adapter(),
});

const mock = {
  film: films[0],
  isPlaying: false,
  index: 0,
};

describe(`FilmCard e2e`, () => {
  it(`Hover callback get right information about card`, () => {
    const onCardMouseEnter = jest.fn(() => void (0));
    const onCardMouseLeave = jest.fn();

    const wrapper = shallow(<FilmCard
      id={mock.film.id}
      title={mock.film.name}
      previewImage={mock.film.previewImage}
      previewVideoLink={mock.film.previewVideoLink}
      isPlaying={mock.isPlaying}
      index={mock.index}
      onCardMouseEnter={onCardMouseEnter}
      onCardMouseLeave={onCardMouseLeave}
    />);

    wrapper.simulate(`mouseenter`);

    expect(onCardMouseEnter).toHaveBeenCalledTimes(1);
  });
});
