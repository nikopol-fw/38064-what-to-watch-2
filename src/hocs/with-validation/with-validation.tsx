import * as React from 'react';
import {FormEvent, SyntheticEvent} from 'react';

import {FormReview} from '../../models/form-review';
import history from '../../history';


interface State {
  isDisabled: boolean;
  isSubmitDisabled: boolean;
}

export const withValidation = (Component) => {
  type T = React.ComponentProps<typeof Component>;
  interface Props extends T {
    filmId: number;
    sendReview: (filmId: number, formData: FormReview) => Promise<any>;
  }

  class WithValidation extends React.PureComponent<Props, State> {

    state = {
      isDisabled: false,
      isSubmitDisabled: true,
    };

    constructor(props) {
      super(props);

      this.onFormChange = this.onFormChange.bind(this);
      this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    private onFormChange(evt: SyntheticEvent<HTMLFormElement, FormEvent>) {
      const form = evt.target as HTMLFormElement;

      if (form.validity.valid) {
        this.setState({
          isSubmitDisabled: false,
        });
      } else {
        this.setState({
          isSubmitDisabled: true,
        });
      }
    }

    private onFormSubmit(evt: SyntheticEvent<HTMLFormElement, FormEvent>) {
      evt.preventDefault();

      this.setState({
        isDisabled: true,
      });

      const form = evt.target;
      const formData: FormReview = {
        rating: form[`rating`].value,
        comment: form[`review-text`].value,
      };

      this.props.sendReview(this.props.filmId, formData)
        .then(() => {
          history.push(`/films/${this.props.filmId}`);
        })
        .catch((error) => {
          this.setState({
            isDisabled: false,
          });
          throw new Error(error);
        });
    }

    render() {
      return (
        <Component
          {...this.props}
          isDisabled={this.state.isDisabled}
          isSubmitDisabled={this.state.isSubmitDisabled}
          onFormChange={this.onFormChange}
          onFormSubmit={this.onFormSubmit}
        />
      );
    }
  }

  return WithValidation;
};
