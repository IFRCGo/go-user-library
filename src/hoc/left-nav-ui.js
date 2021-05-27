import React, {Component} from "react";
import {NavLink, withRouter} from "react-router-dom";

class LeftNavUi extends Component {
    state = {
        addClass: false,
    };

    getMenu() {
        return (
            <ul className="left-nav">
                <li>
                    <NavLink
                        to="/ui-components/breadcrumbs"
                        title="Breadcrumbs"
                        activeClassName="active"
                        className={this.state.className ? "active" : ""}
                        exact
                    >
                        Breadcrumbs
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/ui-components/buttons"
                        title="Buttons"
                        activeClassName="active"
                        exact
                    >
                        Buttons
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/ui-components/cards"
                        title="Forms"
                        activeClassName="active"
                        exact
                    >
                        Cards
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/ui-components/forms"
                        title="Forms"
                        activeClassName="active"
                        exact
                    >
                        Forms
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
                <li>
                    <NavLink
                        to="/ui-components/modal"
                        title="Links"
                        activeClassName="active"
                        exact
                    >
                        Modal
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/ui-components/tabs"
                        title="Tabs"
                        activeClassName="active"
                        exact
                    >
                        Tabs
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
