import React from "react";
import {Link, withRouter} from "react-router-dom";
import {ListData} from "./list";

import Logo from "../assets/graphics/layout/go-logo-2020.svg";

function Header(props) {
    const menu = ListData.header;
    return (
        <div className="desktop__header">
            <header className="page__header" role="banner">
                <div className="page__header__inner__wrap">
                    <div className="container-lg spacing-v">
                        <div className="inner row flex">
                            <div className="page__headline col">
                                <h1 className="page__title">
                                    <Link to="/" title="title">
                                        <img src={Logo} alt="text" className="logo-main"/>
                                    </Link>
                                </h1>
                            </div>
                            <nav className="page__prime-nav col" role="navigation">
                                <ul className="nav-global-menu">

                                    {menu.map((item, i) => (
                                        <li key={i}>
                                            <Link to={item.link} title={item.name}>
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                            <div className="page__nav-actions">
                                <Link
                                    to="/"
                                    title="title"
                                    className="button button--small button--primary-filled"
                                >
                                    Go to GO
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default withRouter(Header);
