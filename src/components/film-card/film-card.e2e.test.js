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
    const isPlaying = false;
    const cardMouseEnterHandler = jest.fn((film) => {
      // eslint-disable-next-line no-console
      console.log(film.id);
    });
    const cardMouseLeaveHandler = jest.fn();

    const filmCard = shallow(<FilmCard
      title={mockFilm.title}
      preview={mockFilm.preview}
      poster={mockFilm.poster}
      isPlaying={isPlaying}
      onCardMouseEnter={cardMouseEnterHandler.bind(null, mockFilm)}
      onCardMouseLeave={cardMouseLeaveHandler}
    />);

    filmCard
      .simulate(`mouseenter`);

    expect(cardMouseEnterHandler).toHaveBeenCalledWith(mockFilm);
  });
});
