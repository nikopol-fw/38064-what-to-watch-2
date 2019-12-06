import React from 'react';
import PropTypes from 'prop-types';
import {Route, Switch} from 'react-router-dom';

import {withLayout} from '../../hocs/with-layout/with-layout';
import MainPage from '../main-page/main-page';
import {FilmPage} from '../film-page/film-page';
import {Login} from '../pages/login/login';


// const getPageScreen = (props) => {
//   const {films, film} = props;
//
//   switch (location.pathname) {
//     case `/`:
//       return ;
//     case `/films`:
//       return <FilmPage
//         title={film.title}
//         genre={film.genre}
//         releaseYear={film.releaseYear}
//         posterImg={film.posterImg}
//         coverImg={film.coverImg}
//       />;
//     default:
//       return <MainPage films={films}/>;
//   }
// };

const MainPageWrapped = withLayout(MainPage);


const App = () => {
  return <Switch>
    <Route path="/" exact component={MainPageWrapped}/>
    <Route path="/login" component={Login}/>
    <Route path="/films/:id" component={FilmPage}/>
  </Switch>;
};


App.propTypes = {

};


export {App};

// getPageScreen.propTypes = {
//   films: PropTypes.array.isRequired,
//   film: PropTypes.shape({
//     title: PropTypes.string.isRequired,
//     genre: PropTypes.string.isRequired,
//     releaseYear: PropTypes.string.isRequired,
//     posterImg: PropTypes.string.isRequired,
//     coverImg: PropTypes.string.isRequired,
//   })
// };
