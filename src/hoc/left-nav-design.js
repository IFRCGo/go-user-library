import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";

class LeftNavDesign extends Component {
  state = {
    addClass: false,
  };
  getMenu() {
    return (
      <ul className="left-nav">
        <li>
          <NavLink
            to="/brand-design/intro"
            title="some link"
            activeClassName="active"
            className={this.state.className ? "active" : ""}
            exact
          >
            IFRC Brand Guidelines
          </NavLink>
        </li>
        <li>
          <NavLink to="/brand-design/colours" title="colours" activeClassName="active" exact>
            Colours
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

export default withRouter(LeftNavDesign);
