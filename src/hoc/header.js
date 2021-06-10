import React from "react";
import {Link, withRouter} from "react-router-dom";
import {ListData} from "../utils/list";
import Logo from "../assets/graphics/layout/go-logo-2020.svg";

function Header(props) {
    const data = props.lineItems ? props.lineItems : ListData.header;

    return (
        <div className="desktop__header">
            <header className="page__header" role="banner">
                <div className="page__header__inner__wrap">
                    <div className="container-lg spacing-v">
                        <div className="inner row flex">
                            {data.logo ? (
                                <div className="page__headline col">
                                    <h1 className="page__title">
                                        <Link to="/" title="title">
                                            <img src={Logo} alt="text" className="logo-main"/>
                                        </Link>
                                    </h1>
                                </div>
                            ) : null}
                            {data.menu ? (
                                <nav className="page__prime-nav col" role="navigation">
                                    <ul className="nav-global-menu">
                                        {data.menu.map((item, i) => (
                                            <li key={i}>
                                                <Link to={item.link} title={item.name}>
                                                    {item.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </nav>
                            ) : null}
                            {data.goto['status'] ? (
                                <div className="page__nav-actions">
                                    <Link
                                        to= {data.goto['link']}
                                        title= {data.goto['title']}
                                        className="button button--small button--primary-filled"
                                    >
                                        {data.goto['title']}
                                    </Link>
                                </div>
                            ) : null}
                            {data.right_menu ? (
                                <div className='page__meta-nav col' role='navigation'>
                                    {data.right_menu.map((item, i) => (
                                        <div>
                                            {item.dropdown ? (
                                                <div>{item.name} - D</div>
                                            ) : null}
                                            {item.link ? (
                                                <Link
                                                    to={item.link}
                                                    title={item.name}
                                                >
                                                    {item.name}
                                                </Link>
                                            ) : null}
                                        </div>
                                    ))}
                                </div>
                            ) : null}
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default withRouter(Header);
