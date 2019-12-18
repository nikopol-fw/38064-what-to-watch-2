import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJSON from 'enzyme-to-json';

import {films} from '../../../mocks/films';
import {user} from '../../../mocks/user';
import {MainPage} from './main';


Enzyme.configure({
  adapter: new Adapter(),
});

const mock = {
  films,
  genres: [`All genres`, `Crime`, `Adventure`, `Comedy`],
  loadPromo: () => void (0),
  promo: films[0],
  setFavorite: () => void (0),
  user,
};

it(`MainPage correctly renders after relaunch`, () => {
  const tree = shallow(
      <MainPage
        films={mock.films}
        genres={mock.genres}
        loadPromo={mock.loadPromo}
        promo={mock.promo}
        setFavorite={mock.setFavorite}
        user={mock.user}
      />
  );

  expect(toJSON(tree)).toMatchSnapshot();
});
