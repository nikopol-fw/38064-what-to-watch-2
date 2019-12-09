import * as React from 'react';
import {connect} from 'react-redux';
import {Route, Switch, Redirect} from 'react-router-dom';

import {User} from "../../models/User";
import {getUserInfo} from "../../reducer/data/selectors";
import {withLayout} from '../../hocs/with-layout/with-layout';
import MainPage from '../pages/main-page/main-page';
import {FilmPage} from '../pages/film-page/film-page';
import {Login} from '../pages/login/login';


const MainPageWrapped = withLayout(MainPage);

const PrivateRoute = ({component: Component, isAuth, ...rest}) => (
  <Route {...rest}
    render={(props) => (
      isAuth ? (
        <Redirect to="/"/>
      ) : (
        <Component {...props} />
      )
    )}
  />
);

interface Props {
  user: User;
}

export const App: React.FC<Props> = (props) => {
  const {user} = props;

  return <Switch>
    <Route path="/" exact render={(mainPageProps) => <MainPageWrapped {...mainPageProps} user={user} />}/>
    <PrivateRoute path="/login" component={Login} isAuth={!!user.id}/>
    <Route path="/films/:id" component={FilmPage}/>
  </Switch>;
};


const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  user: getUserInfo(state),
});

export default connect(mapStateToProps)(App);
