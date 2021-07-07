import React from "react";
import { Link, withRouter } from "react-router-dom";
import c from "classnames";
import { ListData } from "../utils/list";
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
    const data = ListData.data.menu;
    const brand = ListData.brand.menu;
    const components = ListData.components.menu;
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
                <a
                  title="title"
                  className="button button--small button--primary-filled"
                  href="https://go.ifrc.org/"
                >
                  Go to GO
                </a>
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
                  {brand.map((item, i) => (
                    <li key={i}>
                      <Link
                        to={item.link}
                        title={item.name}
                        className={c({
                          disabled: pathname === item.link,
                        })}
                      >
                        <span>{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>

              <li>
                <span>Ui Components</span>
                <ul className="nav-block-submenu">
                  {components.map((item, i) => (
                    <li key={i}>
                      <Link
                        to={item.link}
                        title={item.name}
                        className={c({
                          disabled: pathname === item.link,
                        })}
                      >
                        <span>{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>

              <li>
                <span>Data Viz</span>
                <ul className="nav-block-submenu">
                  {data.map((item, i) => (
                    <li key={i}>
                      <Link
                        to={item.link}
                        title={item.name}
                        className={c({
                          disabled: pathname === item.link,
                        })}
                      >
                        <span>{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </header>
    );
  }
}

export default withRouter(MobileHeader);
