import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import Menu, { Item as MenuItem } from "rc-menu";

class SecondaryNavigation extends Component {
  getMenu() {
    return (
      <Menu mode="inline">
        <MenuItem key="1-1">
          <Link to="/ui-components/buttons/">Buttons</Link>
        </MenuItem>
      </Menu>
    );
  }

  render() {
    return <div className="fold fold--main">{this.getMenu()}</div>;
  }
}

export default withRouter(SecondaryNavigation);
