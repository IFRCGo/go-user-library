import React from "react";
import {Tab, Tabs, TabList, TabPanel} from "react-tabs";
import ReactDOMServer from "react-dom/server";

import Code from "./../../../hoc/source-code";
import Alert from "../alert/alert";

import Header from "../../../hoc/header";
import Footer from "../../../hoc/footer";
import {ListData} from "../../../utils/list";

const htmlString = ReactDOMServer.renderToStaticMarkup(
    <div className="navigation__block">
    <span>
      <span>
        <a className="navigation" order="1" href="/get-started">
          Home
        </a>
        <span className="navigation__next"> &gt; </span>
      </span>
      <b order="0" to="/ui-components/buttons" className="navigation">
        Navigation
      </b>
    </span>
    </div>
);

const NavigationsPage = () => {
    const menu = ListData;
    console.log(menu.header);
    return (
        <React.Fragment>
            <div className="inner">
                <div className="fold__header">
                    <div className="fold__header__block">
                        <h2 className="fold__title margin-reset">navigations</h2>
                    </div>
                </div>
                <div className="fold__body">
                    <div className="container-full">
                        <p>Navigation is a group of settings and ways for users to navigate through a website. It is a
                            combination of design patterns including links, label, and other UI elements, providing
                            relevant information to simplify the interaction with the platform.</p>
                    </div>
                </div>
            </div>
            <div className="tab__wrap">
                <h4>Top Navigation / Register</h4>
                <Tabs>
                    <TabList>
                        <Tab>Example</Tab>
                        <Tab>Code</Tab>
                    </TabList>
                    <TabPanel>
                        <p><b>Component:</b>  Header (path: /hoc/header)</p>
                        <Header
                            lineItems={menu.demoOne}
                        />
                    </TabPanel>
                    <TabPanel>
                        <Code source={JSON.stringify(menu.demoOne)}/>
                    </TabPanel>
                </Tabs>
                <h4>Top Navigation / Logged In</h4>
                <Tabs>
                    <TabList>
                        <Tab>Example</Tab>
                        <Tab>Data Code</Tab>
                    </TabList>
                    <TabPanel>
                        <p><b>Component:</b> Header (path: /hoc/header)</p>
                        <Header
                            lineItems={menu.demoTwo}
                        />
                    </TabPanel>
                    <TabPanel>
                        <Code source={JSON.stringify(menu.demoTwo)}/>
                    </TabPanel>
                </Tabs>
                <h4>Top Menu</h4>
                <Tabs>
                    <TabList>
                        <Tab>Example</Tab>
                        <Tab>Data Code</Tab>
                    </TabList>
                    <TabPanel>
                        <p><b>Component:</b>  Header (path: /hoc/header)</p>
                        <Header
                            lineItems={menu.demoThree}
                        />
                    </TabPanel>
                    <TabPanel>
                        <Code source={JSON.stringify(menu.demoThree)}/>
                    </TabPanel>
                </Tabs>
                <h4>Footer</h4>
                <Tabs>
                    <TabList>
                        <Tab>Example</Tab>
                        <Tab>Data Code</Tab>
                    </TabList>
                    <TabPanel>
                        <p><b>Component:</b>  Footer (path: /hoc/footer)</p>
                        <Footer
                            lineItems={menu.footer}
                        />
                    </TabPanel>
                    <TabPanel>
                        <Code source={JSON.stringify(menu.footer)}/>
                    </TabPanel>
                </Tabs>
            </div>
            <div className="fold__body">
                <h2 className="fold__title margin-reset">COMMENTS</h2>
                <p>Top navigation and top menu are present on every page. The only difference in use cases of these
                    components is the Register vs. Lodded in states.</p>
            </div>
        </React.Fragment>
    );
};
export default NavigationsPage;
