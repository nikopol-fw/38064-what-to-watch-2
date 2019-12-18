import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {films} from '../../../mocks/films';
import {user} from '../../../mocks/user';
import {FilmPage} from './film';


Enzyme.configure({
  adapter: new Adapter(),
});

const mock = {
  films,
  film: films[0],
  user,
};

describe(`FilmPage e2e`, () => {
  it(`It should change history correct when call the handlePlayBtnClick method`, () => {
    const historyMock = {
      push: jest.fn(),
    };
    const location = null;

    const wrapper = shallow(
        <FilmPage
          history={historyMock}
          location={location}
          films={mock.films}
          film={mock.film}
          user={mock.user}
        />);

    wrapper.instance().handlePlayBtnClick();
    expect(historyMock.push).toHaveBeenCalledTimes(1);
  });
});
