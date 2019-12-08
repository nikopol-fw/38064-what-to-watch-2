import * as React from 'react';
import {Route, Switch} from 'react-router-dom';

import {withLayout} from '../../hocs/with-layout/with-layout';
import MainPage from '../main-page/main-page';
import {FilmPage} from '../pages/film-page/film-page';
import {Login} from '../pages/login/login';


const MainPageWrapped = withLayout(MainPage);

const App: React.FC = () => {
  return <Switch>
    <Route path="/" exact component={MainPageWrapped}/>
    <Route path="/login" component={Login}/>
    <Route path="/films/:id" component={FilmPage}/>
  </Switch>;
};


export {App};
