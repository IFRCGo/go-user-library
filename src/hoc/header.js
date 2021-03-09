import React from "react";
import { Link, withRouter } from "react-router-dom";

import Logo from "../assets/graphics/layout/go-logo-2020.svg";

function Header(props) {

  return (
    <div className="desktop__header">
      <header className="page__header" role="banner">
        <div className="page__header__inner__wrap">
          <div className="container-lg spacing-v">
            <div className="inner row flex">
              <div className="page__headline col">
                <h1 className="page__title">
                  <Link to="/" title="title">
                    <img src={Logo} alt="text" className="logo-main" />
                  </Link>
                </h1>
              </div>
              <nav className="page__meta-nav col" role="navigation">
                <Link
                  to="/get-started"
                  title="title"
                  className="page__meta-nav-elements"
                >
                  Get Started
                </Link>

                <Link
                  to="/brand-design"
                  title="title"
                  className="page__meta-nav-elements"
                >
                  Brand & Design Guidelines
                </Link>

                <Link
                  to="/ui-components"
                  title="title"
                  className="page__meta-nav-elements"
                >
                  Ui Components
                </Link>
                <Link
                  to="/content"
                  title="title"
                  className="page__meta-nav-elements"
                >
                  Content
                </Link>
                <Link
                  to="/resources"
                  title="title"
                  className="page__meta-nav-elements"
                >
                  Resources
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
export default withRouter(Header);
