import * as React from 'react';
import {FormEvent} from "react";
import {withRouter, RouteComponentProps} from 'react-router-dom';

import {FormLogin} from '../../../models/form-login';


interface Props extends RouteComponentProps {
  authorize: (formData: FormLogin) => Promise<any>;
}

export class LoginForm extends React.PureComponent<Props, null> {

  constructor(props: Props) {
    super(props);

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  private handleFormSubmit(evt: FormEvent<HTMLFormElement>) {
    evt.preventDefault();

    const form = evt.target;
    const formData: FormLogin = {
      email: form[`email`].value,
      password: form[`password`].value,
    };

    this.props.authorize(formData)
      .then(() => {
        const {history, location} = this.props;
        if (location.key) {
          history.goBack();
        } else {
          history.push(`/`);
        }
      });
  }

  render() {
    return (
      <form className="sign-in__form" onSubmit={this.handleFormSubmit}>
        <div className="sign-in__fields">
          <div className="sign-in__field">
            <input className="sign-in__input" type="email" placeholder="Email address" name="email" id="user-email"
              required
            />
            <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
          </div>
          <div className="sign-in__field">
            <input className="sign-in__input" type="password" placeholder="Password" name="password" id="user-password"
              required
            />
            <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
          </div>
        </div>
        <div className="sign-in__submit">
          <button className="sign-in__btn" type="submit">Sign in</button>
        </div>
      </form>
    );
  }
}


export default withRouter(LoginForm);
