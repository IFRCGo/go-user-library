import React from "react";
import { Row, Col } from "react-flexbox-grid";

import Header from "./header";
import Footer from "./footer";
import MobileHeader from "./mobile-header";
import SecondaryNavigation from "./left-nav";

const PageLayoutWithNav = (props) => (
  <React.Fragment>
    <Header />
    <MobileHeader />
    <main role="main" className="page__body">
      <section className="inpage">
        <header className="inpage__header">
          <div className="">
            <div className="inpage__headline">
              <h1 className="inpage__title inpage__title--home container-lg">
                UI components
              </h1>
            </div>
          </div>
        </header>
        <Row>
          <Col xs={12} md={3} lg={3} className="mobile">
            <SecondaryNavigation />
          </Col>
          <Col xs={12} md={9} lg={9}>
            {props.children}
          </Col>
        </Row>
      </section>
    </main>
    <Footer />
  </React.Fragment>
);

export default PageLayoutWithNav;
