import React from "react";

import Header from "./header";
import Footer from "./footer";
import MobileHeader from "./mobile-header";
import LeftNavDesign from "./left-nav-design";

const PageLayoutDesign = (props) => (
  <React.Fragment>
    <Header />
    <MobileHeader />
    <main role="main" className="page__body ui-library">
      <section className="inpage">
        <header className="inpage__header">
          <div className="">
            <div className="inpage__headline">
              <h1 className="inpage__title inpage__title--home container-lg">
                Brand Design &amp; Guidelines
              </h1>
            </div>
          </div>
        </header>

        <div className="fold">
          <div className="container-lg">
            <div className="flex flex-lg">
              <div className="col-3-xs col-2-mid mobile">
                <LeftNavDesign />
              </div>
              <div className="col-12-xs col-10-mid main">{props.children}</div>
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </React.Fragment>
);

export default PageLayoutDesign;
