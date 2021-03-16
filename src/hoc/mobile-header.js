import React from "react";
import { Link, withRouter } from "react-router-dom";
import c from "classnames";

import logo from "./../assets/graphics/layout/go-logo-2020.svg";

class MobileHeader extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      showMenu: false,
    };
    this.onSelect = this.onSelect.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu(e) {
    e.preventDefault();
    this.setState({ showMenu: !this.state.showMenu });
  }

  onSelect({ value }) {
    this.props.history.push(value);
  }

  render() {
    const { pathname } = this.props.location;

    return (
      <header className="page__header page__header--mobile" role="banner">
        <div className="inner container-lg">
          <div className="page__headline row flex">
            <div className="page__menu col">
              <a href="#link" onClick={this.toggleMenu}></a>
            </div>
            <h1 className="page__title col">
              <Link to="/" title="title">
                <img src={logo} alt="IFRC GO logo" />
              </Link>
            </h1>
          </div>
        </div>
        <div className="inner container-lg">
          <div className="nav-global-search">
            <form className="gsearch">
              <div>
                <label className="form__label"></label>
              </div>
            </form>
          </div>
        </div>
        <div
          className={c("nav__block", {
            "nav__block--open": this.state.showMenu,
          })}
        >
          <div className="inner container-lg">
            <div className="mobile__actions">
              <button
                className="button button--small button--close button--text-hidden"
                onClick={this.toggleMenu}
              >
                <span>title</span>
              </button>
            </div>
            <ul className="nav-block-menu">
              <li>
                <Link
                  to="/resources"
                  title="title"
                  className="button button--small button--primary-filled"
                >
                  Go to GO
                </Link>
              </li>
              <li>
                <Link
                  to="/get-started"
                  title="Get started"
                  className={c({ disabled: pathname === "/get-started" })}
                >
                  <span>Get started</span>
                </Link>
              </li>
              <li>
                <span>Brand & Design Guidelines</span>
                <ul className="nav-block-submenu">
                  <li>
                    <Link
                      to="/brand-design/intro"
                      title="IFRC Brand Guidelines"
                      className={c({
                        disabled: pathname === "/brand-design/intro",
                      })}
                    >
                      <span>IFRC Brand Guidelines</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/brand-design/colours"
                      title="Colours"
                      className={c({
                        disabled: pathname === "/brand-design/colours",
                      })}
                    >
                      <span>Colours</span>
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <span>Ui Components</span>
                <ul className="nav-block-submenu">
                  <li>
                    <Link
                      to="/ui-components/breadcrumbs"
                      title="Breadcrumbs"
                      className={c({
                        disabled: pathname === "/ui-components/breadcrumbs",
                      })}
                    >
                      <span>Breadcrumbs</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/ui-components/buttons"
                      title="Buttons"
                      className={c({
                        disabled: pathname === "/ui-components/buttons",
                      })}
                    >
                      <span>Buttons</span>
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/ui-components/links"
                      title="Links"
                      className={c({
                        disabled: pathname === "/ui-components/links",
                      })}
                    >
                      <span>Links</span>
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link
                  to="/content/map"
                  title="Content"
                  className={c({ disabled: pathname === "/content/map" })}
                >
                  <span>Content</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/resources"
                  title="Resources"
                  className={c({ disabled: pathname === "/resources" })}
                >
                  <span>Resources</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    );
  }
}

export default withRouter(MobileHeader);
