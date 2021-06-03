import React, {Component} from "react";
import {NavLink, withRouter} from "react-router-dom";
import {ListData} from "./list.js"

class LeftNavDesign extends Component {
    state = {
        addClass: false,
    };

    getMenu() {
        const menu = ListData.brand;
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

export default withRouter(LeftNavDesign);
