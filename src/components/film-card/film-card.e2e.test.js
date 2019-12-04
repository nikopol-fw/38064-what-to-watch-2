import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {films} from './../../mocks/films';

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
    const onCardMouseEnter = jest.fn((index) => {
      // eslint-disable-next-line no-console
      console.log(index);
    });
    const onCardMouseLeave = jest.fn();

    const filmCard = shallow(<FilmCard
      title={mock.film.name}
      previewImage={mock.film.previewImage}
      previewVideoLink={mock.film.previewVideoLink}
      isPlaying={mock.isPlaying}
      index={mock.index}
      onCardMouseEnter={onCardMouseEnter}
      onCardMouseLeave={onCardMouseLeave}
    />);

    filmCard
      .simulate(`mouseenter`);

    expect(onCardMouseEnter).toHaveBeenCalledTimes(1);
  });
});
