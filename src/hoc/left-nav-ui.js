import React, {Component} from "react";
import {NavLink, withRouter} from "react-router-dom";
import {ListData} from "../utils/list";

class LeftNavUi extends Component {
    state = {
        addClass: false,
    };

    getMenu() {
        const menu = ListData.components.menu;
        return (
            <ul className="left-nav">
                {menu.map((item, i) => (
                    <li key={i}>
                        <NavLink to={item.link} title={item.name} activeClassName="active" exact>
                            {item.name}
                        </NavLink>
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        return <div className="">{this.getMenu()}</div>;
    }
}

export default withRouter(LeftNavUi);
