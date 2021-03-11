import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";

class LeftNavContent extends Component {
  state = {
    addClass: false,
  };
  getMenu() {
    return (
      <ul className="left-nav">
        <li>
          <NavLink
            to="/content/map"
            title="some link"
            activeClassName="active"
            className={this.state.className ? "active" : ""}
            exact
          >
            Map
          </NavLink>
        </li>
        <li>
          <NavLink to="/" title="some link" activeClassName="active" exact>
            Some link3
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

export default withRouter(LeftNavContent);
