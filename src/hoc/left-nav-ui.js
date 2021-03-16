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
            title="Buttons"
            activeClassName="active"
            className={this.state.className ? "active" : ""}
            exact
          >
            Buttons
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/ui-components/links"
            title="Links"
            activeClassName="active"
            exact
          >
            Links
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
