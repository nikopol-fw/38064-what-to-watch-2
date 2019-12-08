import * as React from 'react';

import {Layout} from '../../components/layout/layout';


export const withLayout = (Component) => {
  const WithLayout: React.FC = (props) => (
    <Layout>
      <Component {...props} />
    </Layout>
  );

  return WithLayout;
};
