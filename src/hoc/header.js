import React from "react";
import {Link, withRouter} from "react-router-dom";
import {ListData} from "../utils/list";
import Logo from "../assets/graphics/layout/go-logo-2020.svg";
import { DropdownMenu, MenuItem,  } from 'react-bootstrap-dropdown-menu';
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'

function Header(props) {
    const data = props.lineItems ? props.lineItems : ListData.header;
    let header = "page__header__inner__wrap";
    let headerOne = "container-lg spacing-v";
    let menu = "page__prime-nav col";
    if (props.filter) {
        header = null;
        headerOne = null;
        menu= null;
    }
    return (
        <div className="desktop__header">
            <header className="page__header" role="banner">
                <div className={header}>
                    <div className={headerOne}>
                        <div className="inner row flex">
                            {data.logo ? (
                                <div className="page__headline">
                                    <h1 className="page__title">
                                        <Link to="/" title="title">
                                            <img src={Logo} alt="text" className="logo-main" activeClassName="active"/>
                                        </Link>
                                    </h1>
                                </div>
                            ) : null}
                            {data.menu ? (
                                <nav className={menu} role="navigation">
                                    <ul className= "nav-global-menu">
                                        {data.menu.map((item, i) => (
                                            <li key={i}>
                                                {item.type === 'dropdown' ? (
                                                    <div>{item.name} (->D)</div>
                                                ) : null}
                                                {item.type === 'link' ? (
                                                    <Link
                                                        to={item.link}
                                                        title={item.name}
                                                        className='page__meta-nav-elements'>
                                                        {item.name}
                                                    </Link>
                                                ) : null}
                                            </li>
                                        ))}
                                    </ul>
                                </nav>
                            ) : null}

                            {data.goto ? (
                            <div className="page__nav-actions">
                                <a title="Go to GO" className="button button--small button--primary-filled"
                                   href="https://go.ifrc.org/">Go to GO</a>
                            </div>
                            ) : null}
                            {data.right_menu ? (
                                <div className='page__meta-nav col' role='navigation'>
                                    {data.right_menu.map((item, i) => (
                                        <div>
                                            {item.type === 'link' ? (
                                                <Link
                                                    to={item.link}
                                                    title={item.name}
                                                    className='page__meta-nav-elements'>
                                                    {item.name}
                                                </Link>
                                            ) : null}
                                            {item.type === 'dropdown' ? (
                                                <DropdownButton title="language" id='header-dropdown-lang'>
                                                    {item.dropdown.map((item, i) => (
                                                        <Dropdown.Item href={item.name}>{item.name}</Dropdown.Item>
                                                    ))}
                                                </DropdownButton>
                                            ) : null}
                                            {item.type === 'user' ? (
                                            <DropdownMenu userName={item.name}>
                                                {item.menu.map((item, i) => (
                                                    <MenuItem text={item.name} location={item.location} />
                                                ))}
                                            </DropdownMenu>
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
