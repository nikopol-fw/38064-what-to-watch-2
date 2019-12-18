import React from 'react';
import renderer from 'react-test-renderer';
import {StaticRouter} from 'react-router-dom';

import {films} from '../../../mocks/films';
import {genres} from '../../../mocks/genres';
import {Catalog} from './catalog';


const mock = {
  films: films[0],
  genres,
  activeGenre: genres[0],
  count: 8,
  setActiveGenre: () => void (0),
  showMore: () => void (0),
  filmsWithGenre: films,
};

it(`Catalog correctly renders afters relaunch`, () => {
  const tree = renderer.create(
      <StaticRouter>
        <Catalog
          films={mock.films}
          genres={mock.genres}
          activeGenre={mock.activeGenre}
          count={mock.count}
          setActiveGenre={mock.setActiveGenre}
          showMore={mock.showMore}
          filmsWithGenre={mock.filmsWithGenre}
        />
      </StaticRouter>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
