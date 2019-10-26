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
    const cardHoverHandler = jest.fn((film) => {
      // eslint-disable-next-line no-console
      console.log(film.title);
      // eslint-disable-next-line no-console
      console.log(film.img);
    });

    const filmCard = shallow(<FilmCard
      title={mockFilm.title}
      img={mockFilm.img}
      onCardHover={cardHoverHandler.bind(null, mockFilm)}
    />);

    filmCard
      .simulate(`mouseenter`);

    expect(cardHoverHandler).toHaveBeenCalledWith(mockFilm);
  });
});
