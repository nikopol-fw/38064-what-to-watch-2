import * as React from 'react';
import {connect} from 'react-redux';
import {Redirect, Route, Router, Switch} from 'react-router-dom';

import {User} from "../../models/User";
import history from "../../history";
import {getUserInfo} from "../../reducer/user/selectors";
import {withLayout} from '../../hocs/with-layout/with-layout';
import MainPage from '../pages/main/main';
import FilmPage from '../pages/film/film';
import {Login} from '../pages/login/login';
import MyList from "../pages/my-list/my-list";
import LayoutMainPage from "../shared/layout-main-page/layout-main-page";


const MainPageWrapped = withLayout(MainPage, LayoutMainPage);

interface PrivateRouteProps {
  component: React.ComponentType;
  is: boolean;
  path: string;
  redirectTo: string;
  data?: any;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({component: Component, is, redirectTo, data, ...rest}) => (
  <Route {...rest}
    render={(props) => (
      is ? (
        <Component {...props} {...data} />
      ) : (
        <Redirect to={redirectTo}/>
      )
    )}
  />
);

interface Props {
  user: User;
}

export const App: React.FC<Props> = (props) => {
  const {user} = props;

  const isLogin = !!user.id;

  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact
          render={(mainPageProps): React.ReactNode => <MainPageWrapped {...mainPageProps} layoutProps={{user}}/>}
        />
        <Route path="/films/:id" exact component={FilmPage}/>
        <PrivateRoute path="/mylist" component={MyList} is={isLogin} redirectTo={`/login`} data={{user}}/>
        <PrivateRoute path="/login" component={Login} is={!isLogin} redirectTo={`/`}/>
      </Switch>
    </Router>
  );
};


const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  user: getUserInfo(state),
});

export default connect(mapStateToProps)(App);
