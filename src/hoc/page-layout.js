import React from "react";

import Header from "./header";
import Footer from "./footer";
import MobileHeader from "./mobile-header";

const PageLayout = (props) => {
  return (
    <React.Fragment>
      <Header />
      <MobileHeader />
      <main role="main" className="page__body">
        {props.children}
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default PageLayout;
