import React from "react";
import {Tab, Tabs, TabList, TabPanel} from "react-tabs";
import ReactDOMServer from "react-dom/server";
import Code from "./../../../hoc/source-code";
import Dropdown from "react-bootstrap/Dropdown";
import Header from "../../../hoc/header";
import {ListData} from "../../../utils/list";

const htmlString = ReactDOMServer.renderToStaticMarkup(
    <div className="filters__block">
  <span>
    <span>
      <a className="filters" order="1" href="/get-started">
        Home
      </a>
      <span className="filters__next"> &gt; </span>
    </span>
    <b order="0" to="/ui-components/filters" className="filters">
      Filters
    </b>
  </span>
    </div>
);

const FiltersPage = () => {
    const menu = ListData;
    return (
        <React.Fragment>
            <div className="inner">
                <div className="fold__header">
                    <h1>FILTERS</h1>
                    <p>Filtering allows users to highlight/dim down specific items when working through data sets.
                        Filters can help a user see available options within a certain set of criteria and make a
                        decision when faced with a large number of options</p>
                </div>
                <br/><br/>

                <div className="fold__header">
                    <div className="container-mid">
                        <div className="fold__header__block">
                            <h2 className="fold__title margin-reset">Filters</h2>
                        </div>
                    </div>
                </div>

                <div className="fold__body">
                    <div className="container-mid">
                        <div>
                            <Tabs>
                                <TabPanel>
                                    <p className="poppins_16 font_weight_500">Filter for tables and maps</p>
                                    <Tabs>
                                        <TabList>
                                            <Tab>Example</Tab>
                                            <Tab>Code</Tab>
                                        </TabList>
                                        <TabPanel>
                                            <div className="filter-dropdown">
                                                <nav>
                                                    <ul className="x">
                                                        <li>
                                                            <form className="form-search form-inline">
                                                                <input type="text" className="search-query"
                                                                       placeholder="Search"/>
                                                            </form>
                                                        </li>
                                                        <li>
                                                            <Dropdown className="filter-dropdown">
                                                                <Dropdown.Toggle
                                                                    className="filter-dropdown-menu form__control--filter "
                                                                >
                                                                    Date Range
                                                                    <i className="collecticon-calendar"></i>
                                                                </Dropdown.Toggle>

                                                                <Dropdown.Menu
                                                                    className='drop__menu drop__menu__field__report'>
                                                                    <Dropdown.Item href="#/action-1"
                                                                                   className='drop__menu-item'>Action</Dropdown.Item>
                                                                    <Dropdown.Item href="#/action-2"
                                                                                   className='drop__menu-item'>Another
                                                                        action</Dropdown.Item>
                                                                    <Dropdown.Item href="#/action-3"
                                                                                   className='drop__menu-item'>Something
                                                                        else</Dropdown.Item>
                                                                </Dropdown.Menu>
                                                            </Dropdown>
                                                        </li>

                                                        {/*Select Provinces*/}
                                                        <li>
                                                            <Dropdown className="filter-dropdown">
                                                                <Dropdown.Toggle
                                                                    className="filter-dropdown-menu form__control--filter drop__toggle--caret"
                                                                >
                                                                    Select Provinces
                                                                </Dropdown.Toggle>

                                                                <Dropdown.Menu
                                                                    className='drop__menu drop__menu__field__report'>
                                                                    <Dropdown.Item href="#/action-1"
                                                                                   className='drop__menu-item'>Action</Dropdown.Item>
                                                                    <Dropdown.Item href="#/action-2"
                                                                                   className='drop__menu-item'>Another
                                                                        action</Dropdown.Item>
                                                                    <Dropdown.Item href="#/action-3"
                                                                                   className='drop__menu-item'>Something
                                                                        else</Dropdown.Item>
                                                                </Dropdown.Menu>
                                                            </Dropdown>
                                                        </li>

                                                        {/*Select Types*/}
                                                        <li>
                                                            <Dropdown className="filter-dropdown">
                                                                <Dropdown.Toggle
                                                                    className="filter-dropdown-menu form__control--filter drop__toggle--caret"
                                                                >
                                                                    Select Types
                                                                </Dropdown.Toggle>

                                                                <Dropdown.Menu
                                                                    className='drop__menu drop__menu__field__report'>
                                                                    <Dropdown.Item href="#/action-1"
                                                                                   className='drop__menu-item'>Action</Dropdown.Item>
                                                                    <Dropdown.Item href="#/action-2"
                                                                                   className='drop__menu-item'>Another
                                                                        action</Dropdown.Item>
                                                                    <Dropdown.Item href="#/action-3"
                                                                                   className='drop__menu-item'>Something
                                                                        else</Dropdown.Item>
                                                                </Dropdown.Menu>
                                                            </Dropdown>
                                                        </li>

                                                        {/*Select Sectors*/}
                                                        <li>
                                                            <Dropdown className="filter-dropdown">
                                                                <Dropdown.Toggle
                                                                    className="filter-dropdown-menu form__control--filter drop__toggle--caret"
                                                                >
                                                                    Select Sectors
                                                                </Dropdown.Toggle>

                                                                <Dropdown.Menu
                                                                    className='drop__menu drop__menu__field__report'>
                                                                    <Dropdown.Item href="#/action-1"
                                                                                   className='drop__menu-item'>Action</Dropdown.Item>
                                                                    <Dropdown.Item href="#/action-2"
                                                                                   className='drop__menu-item'>Another
                                                                        action</Dropdown.Item>
                                                                    <Dropdown.Item href="#/action-3"
                                                                                   className='drop__menu-item'>Something
                                                                        else</Dropdown.Item>
                                                                </Dropdown.Menu>
                                                            </Dropdown>

                                                        </li>
                                                    </ul>
                                                </nav>
                                            </div>
                                        </TabPanel>
                                        <TabPanel>
                                            <Code source="{sourceData(ChartData.line)}"/>
                                        </TabPanel>
                                    </Tabs>
                                    <p className="poppins_16 font_weight_500">Filter/tab for graphs</p>
                                    <Header
                                        lineItems={menu.demoFilter}
                                        filter='true'
                                    />

                                    <br/>
                                </TabPanel>
                                <TabPanel>
                                    <Code source={`${htmlString}`}/>
                                </TabPanel>
                            </Tabs>
                        </div>
                        <div className="fold__body">
                            <h2 className="fold__title margin-reset">COMMENTS</h2>
                            <p>Filters will be mainly used for data tables and for maps. There are a few graphs that
                                also require a filter/tab view to navigate more easily.</p>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};
export default FiltersPage;
