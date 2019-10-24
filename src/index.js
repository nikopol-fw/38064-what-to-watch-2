import React from 'react';
import ReactDOM from 'react-dom';

import {App} from './components/app/app.jsx';

const mockFilms = [{
  title: `Fantastic Beasts: The Crimes of Grindelwald`,
}, {
  title: `Bohemian Rhapsody`,
}, {
  title: `Macbeth`,
}, {
  title: `Aviator`,
}];

const init = () => {
  ReactDOM.render(
      <App
        films={mockFilms}
      />,
      document.getElementById(`root`)
  );
};

init();
