import * as React from 'react';
import {connect} from 'react-redux';
import {Route, Switch} from 'react-router-dom';

import {User} from "../../models/User";
import {getUserInfo} from "../../reducer/data/selectors";
import {withLayout} from '../../hocs/with-layout/with-layout';
import MainPage from '../pages/main-page/main-page';
import {FilmPage} from '../pages/film-page/film-page';
import {Login} from '../pages/login/login';


const MainPageWrapped = withLayout(MainPage);

interface Props {
  user: User;
}

export const App: React.FC<Props> = (props) => {
  const {user} = props;

  return <Switch>
    <Route path="/" exact render={(mainPageProps) => <MainPageWrapped {...mainPageProps} user={user} />}/>
    <Route path="/login" component={Login}/>
    <Route path="/films/:id" component={FilmPage}/>
  </Switch>;
};


const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  user: getUserInfo(state),
});

export default connect(mapStateToProps)(App);
