import React from 'react';
import renderer from 'react-test-renderer';
import {StaticRouter} from 'react-router-dom';

import {films} from '../../../mocks/films';

import {FilmCard} from './film-card';


const mock = {
  film: films[0],
  index: 0,
  onCardMouseEnter: () => void (0),
  onCardMouseLeave: () => void (0),
};

it(`FilmCard correctly renders after relaunch`, () => {
  const tree = renderer
    .create(
        <StaticRouter>
          <FilmCard
            id={mock.film.id}
            title={mock.film.name}
            previewImage={mock.film.previewImage}
            previewVideoLink={mock.film.previewVideoLink}
            index={mock.index}
            onCardMouseEnter={mock.onCardMouseEnter}
            onCardMouseLeave={mock.onCardMouseLeave}
          />
        </StaticRouter>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
