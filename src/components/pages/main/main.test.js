import React from 'react';
import renderer from 'react-test-renderer';
import {StaticRouter} from 'react-router-dom';

import {films} from '../../../mocks/films';
import {MainPage} from './main';


const mock = {
  films,
  genres: [`All genres`, `Crime`, `Adventure`, `Comedy`],
};


// it(`MainPage correctly renders after relaunch`, () => {
// const tree = renderer
//   .create(
//       <StaticRouter>
//         <MainPage
//           films={mock.films}
//           genres={mock.genres}
//         />
//       </StaticRouter>
//   )
//   .toJSON();
//
// expect(tree).toMatchSnapshot();
// });
