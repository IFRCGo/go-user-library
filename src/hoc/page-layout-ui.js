import React from "react";

import Header from "./header";
import Footer from "./footer";
import MobileHeader from "./mobile-header";
import LeftNavUi from "./left-nav-ui";
import {ListData} from "../utils/list";

const PageLayoutUi = (props) => (
  <React.Fragment>
    <Header />
    <MobileHeader />
    <main role="main" className="page__body ui-library">
      <section className="inpage">
        <header className="inpage__header">
          <div className="inpage__headline">
            <h1 className="inpage__title inpage__title--home container-lg">
              UI components
            </h1>
          </div>
        </header>
        <div className="fold">
          <div className="container-lg">
            <div className="flex flex-lg">
              <div className="col-3-xs col-2-mid mobile">
                <LeftNavUi />
              </div>
              <div className="col-12-xs col-10-mid main">{props.children}</div>
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer
        lineItems={ListData.footer}
    />
  </React.Fragment>
);

export default PageLayoutUi;
