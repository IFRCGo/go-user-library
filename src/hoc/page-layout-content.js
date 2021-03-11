import React from "react";
import { Row, Col } from "react-flexbox-grid";

import Header from "./header";
import Footer from "./footer";
import MobileHeader from "./mobile-header";
import LeftNavContent from "./left-nav-content";

const PageLayoutContent = (props) => (
  <React.Fragment>
    <Header />
    <MobileHeader />
    <main role="main" className="page__body">
      <section className="inpage">
        <header className="inpage__header">
          <div className="">
            <div className="inpage__headline">
              <h1 className="inpage__title inpage__title--home container-lg">
                Content
              </h1>
            </div>
          </div>
        </header>

        <div className="fold">
          <div className="container-lg">
            <Row>
              <Col xs={12} md={3} lg={3} className="mobile">
                <LeftNavContent />
              </Col>
              <Col xs={12} md={9} lg={9}>
                {props.children}
              </Col>
            </Row>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </React.Fragment>
);

export default PageLayoutContent;
