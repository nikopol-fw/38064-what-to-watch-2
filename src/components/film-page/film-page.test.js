import React from 'react';
import renderer from 'react-test-renderer';

import {film} from '../../mocks/film';

import {FilmPage} from './film-page';


it(`FilmPage correctly renders afters relaunch`, () => {
  const mockFilm = film;

  const tree = renderer
    .create(<FilmPage
      title={mockFilm.title}
      genre={mockFilm.genre}
      releaseYear={mockFilm.releaseYear}
      posterImg={mockFilm.posterImg}
      coverImg={mockFilm.coverImg}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
