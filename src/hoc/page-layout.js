import React from "react";

import Header from "./header";
import Footer from "./footer";
import MobileHeader from "./mobile-header";
import {ListData} from "../utils/list";

const PageLayout = (props) => {
  return (
    <React.Fragment>
      <Header />
      <MobileHeader />
      <main role="main" className="page__body ui-library">
        {props.children}
      </main>
        <Footer
            lineItems={ListData.footer}
        />
    </React.Fragment>
  );
};

export default PageLayout;
