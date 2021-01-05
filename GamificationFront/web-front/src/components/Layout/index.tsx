import React, { Fragment } from 'react';

import { LayoutContainer } from './layout.styled';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <Fragment>
      <LayoutContainer>
        <Header />
        <Content>{children}</Content>
        <Footer />
      </LayoutContainer>
    </Fragment>
  );
};

export default Layout;
