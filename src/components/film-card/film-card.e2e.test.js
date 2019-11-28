import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {films} from './../../mocks/films';

import {FilmCard} from './film-card';


Enzyme.configure({
  adapter: new Adapter(),
});


describe(`FilmCard e2e`, () => {
  it(`Hover callback get right information about card`, () => {
    const mockFilm = films[0];
    const mockIsPlaying = false;
    const mockIndex = 13;
    const cardMouseEnterHandler = jest.fn((index) => {
      // eslint-disable-next-line no-console
      console.log(index);
    });
    const cardMouseLeaveHandler = jest.fn();

    const filmCard = shallow(<FilmCard
      title={mockFilm.title}
      preview={mockFilm.preview}
      poster={mockFilm.poster}
      isPlaying={mockIsPlaying}
      index={mockIndex}
      onCardMouseEnter={cardMouseEnterHandler}
      onCardMouseLeave={cardMouseLeaveHandler}
    />);

    filmCard
      .simulate(`mouseenter`);

    expect(cardMouseEnterHandler).toHaveBeenCalledTimes(1);
  });
});
