import React from 'react';

import {Layout} from '../../components/layout/layout';


const withLayout = (Component) => {
  const WithLayout = (props) => (
    <Layout>
      <Component {...props} />
    </Layout>
  );

  return WithLayout;
};


export {withLayout};
