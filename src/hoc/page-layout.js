import React from "react";

import Header from './header';
import Footer from './footer';

const PageLayout = (props) => {
  return (
    <React.Fragment>
    <Header />
      <main role="main" className="page">
        {props.children}
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default PageLayout;
