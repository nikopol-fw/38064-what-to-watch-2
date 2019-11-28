import React from 'react';
import renderer from 'react-test-renderer';

import {film} from '../../mocks/film';

import {FilmPage} from './film-page';


const mock = {
  film,
};

it(`FilmPage correctly renders afters relaunch`, () => {
  const tree = renderer
    .create(<FilmPage
      title={mock.film.title}
      genre={mock.film.genre}
      releaseYear={mock.film.releaseYear}
      posterImg={mock.film.posterImg}
      coverImg={mock.film.coverImg}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
