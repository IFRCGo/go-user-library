import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";

class LeftNavUi extends Component {
  state = {
    addClass: false,
  };
  getMenu() {
    return (
      <ul className="left-nav">
        <li>
          <NavLink
            to="/ui-components/buttons"
            title="some link"
            activeClassName="active"
            className={this.state.className ? "active" : ""}
            exact
          >
            Buttons
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/ui-components/breadcrumbs"
            title="some link"
            activeClassName="active"
            exact
          >
            Breadcrumbs
          </NavLink>
        </li>
        <li>
          <NavLink to="/" title="some link" activeClassName="active" exact>
            Some link4
          </NavLink>
        </li>
      </ul>
    );
  }

  render() {
    return <div className="">{this.getMenu()}</div>;
  }
}

export default withRouter(LeftNavUi);
