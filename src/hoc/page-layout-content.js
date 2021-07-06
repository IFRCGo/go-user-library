import React from "react";

import Header from "./header";
import Footer from "./footer";
import MobileHeader from "./mobile-header";
import LeftNavContent from "./left-nav-content";
import {ListData} from "../utils/list";

const PageLayoutContent = (props) => (
  <React.Fragment>
    <Header />
    <MobileHeader />
    <main role="main" className="page__body ui-library">
      <section className="inpage">
        <header className="inpage__header">
          <div className="inpage__headline">
            <h1 className="inpage__title inpage__title--home container-lg">
              Data Viz
            </h1>
          </div>
        </header>

        <div className="fold">
          <div className="container-lg">
            <div className=" flex-lg">
              <div className="col-3-xs col-2-mid mobile">
                <LeftNavContent />
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

export default PageLayoutContent;
