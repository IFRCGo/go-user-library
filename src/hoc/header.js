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
              <nav className="page__prime-nav col" role="navigation">
                <ul className="nav-global-menu">
                  <li>
                    <Link to="/get-started" title="title">
                      Get Started
                    </Link>
                  </li>

                  <li>
                    <Link to="/brand-design/intro" title="title">
                      Brand & Design Guidelines
                      <span className="drop__toggle--caret tc-dropdown-menu"></span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/ui-components/breadcrumbs/" title="title">
                      Ui Components
                      <span className="drop__toggle--caret tc-dropdown-menu"></span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/content/map" title="title">
                      Content
                      <span className="drop__toggle--caret tc-dropdown-menu"></span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/resources" title="title">
                      Resources
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/"
                      title="title"
                      className="button button--small button--primary-filled"
                    >
                      Go to GO
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
export default withRouter(Header);
