import * as React from 'react';


interface Props {
  layoutProps: any;
}

export const withLayout = (Component, Layout) => {
  const WithLayout: React.FC<Props> = (props) => (
    <Layout {...props.layoutProps}>
      <Component {...props} />
    </Layout>
  );

  return WithLayout;
};
