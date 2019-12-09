import * as React from 'react';
import {connect} from 'react-redux';
import {Route, Switch, Redirect} from 'react-router-dom';

import {User} from "../../models/User";
import {getUserInfo} from "../../reducer/data/selectors";
import {withLayout} from '../../hocs/with-layout/with-layout';
import MainPage from '../pages/main-page/main-page';
import {FilmPage} from '../pages/film-page/film-page';
import {Login} from '../pages/login/login';
import MyList from "../pages/my-list/my-list";
import LayoutMainPage from "../layout-main-page/layout-main-page";


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

  return <Switch>
    <Route path="/" exact
      render={(mainPageProps): React.ReactNode => <MainPageWrapped {...mainPageProps} layoutProps={{user}}/>}
    />
    <PrivateRoute path="/mylist" component={MyList} is={isLogin} redirectTo={`/login`} data={{user}}/>
    <PrivateRoute path="/login" component={Login} is={!isLogin} redirectTo={`/`}/>
    <Route path="/films/:id" component={FilmPage}/>
  </Switch>;
};


const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  user: getUserInfo(state),
});

export default connect(mapStateToProps)(App);
