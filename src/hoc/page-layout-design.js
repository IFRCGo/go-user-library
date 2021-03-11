import React from "react";
import { Row, Col } from "react-flexbox-grid";

import Header from "./header";
import Footer from "./footer";
import MobileHeader from "./mobile-header";
import LeftNavDesign from "./left-nav-design";

const PageLayoutDesign = (props) => (
  <React.Fragment>
    <Header />
    <MobileHeader />
    <main role="main" className="page__body">
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

        <div className="container-lg">
          <Row>
            <Col xs={12} md={3} lg={3} className="mobile">
              <LeftNavDesign />
            </Col>
            <Col xs={12} md={9} lg={9}>
              {props.children}
            </Col>
          </Row>
        </div>
      </section>
    </main>
    <Footer />
  </React.Fragment>
);

export default PageLayoutDesign;
