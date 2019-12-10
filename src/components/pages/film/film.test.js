import React from 'react';
import renderer from 'react-test-renderer';

import {films} from '../../../mocks/films';

import {FilmPage} from './film';


const mock = {
  film: films[0],
};

it(`FilmPage correctly renders afters relaunch`, () => {
  const tree = renderer
    .create(<FilmPage
      title={mock.film.name}
      genre={mock.film.genre}
      releaseYear={mock.film.released}
      posterImg={mock.film.posterImage}
      coverImg={mock.film.backgroundImage}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
