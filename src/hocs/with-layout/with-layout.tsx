import * as React from 'react';

import {User} from "../../models/User";
import {Layout} from '../../components/layout/layout';


interface Props {
  user: User;
}

export const withLayout = (Component) => {
  const WithLayout: React.FC<Props> = (props) => (
    <Layout user={props.user}>
      <Component {...props} />
    </Layout>
  );

  return WithLayout;
};
