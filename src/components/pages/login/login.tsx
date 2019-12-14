import * as React from 'react';
import {connect} from "react-redux";
import {Link} from 'react-router-dom';

import {FormLogin} from "../../../models/FormLogin";
import {Operation} from "../../../reducer/user/user";
import {LoginForm} from "../../shared/login-form/login-form";


interface Props {
  onAuthorize: (formData: FormLogin) => Promise<any>;
}

export class LoginPage extends React.PureComponent<Props> {

  render() {
    const {onAuthorize} = this.props;

    return (
      <div className="user-page">
        <header className="page-header user-page__head">
          <div className="logo">
            <Link to="/" className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>

          <h1 className="page-title user-page__title">Sign in</h1>
        </header>

        <div className="sign-in user-page__content">
          <LoginForm onAuthorize={onAuthorize}/>
        </div>

        <footer className="page-footer">
          <div className="logo">
            <Link to="/" className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    );
  }
}


const mapDispatchToProps = (dispatch) => ({
  onAuthorize: (formData: FormLogin) => dispatch(Operation.authorize(formData)),
});


export default connect(null, mapDispatchToProps)(LoginPage);
