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
          <h1>NAVIGATION</h1>
          <p>Navigation is a group of settings and ways for users to navigate through a website. It is a combination of design patterns including links, label, and other UI elements, providing relevant information to simplify the interaction with the platform.</p>
        </div>
        <br/><br/>

        <div className="fold__header">
          <div className="container-mid">
            <div className="fold__header__block">
              <h2 className="fold__title margin-reset">Top Navigation</h2>
            </div>
            <br/>
            <p>The examples will be display on a desktop size screen</p>
          </div>
        </div>

        <div className="tab__wrap">
          <div className="container-mid">
            <p className="poppins_16 font_weight_500">Top Navigation / Register</p>
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
          </div>

          <div className="fold">
            <div className="container-mid">
              <p className="poppins_16 font_weight_500">Top Navigation / Logged In</p>
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
            </div>
          </div>

          <div className="container-mid">
            <p className="poppins_16 font_weight_500">Top Menu</p>
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
          </div>

          <div className="fold container-mid">
            <div className="container-mid">
              <h2 className="fold__title margin-reset">COMMENTS</h2>
              <br/>
              <p>Top navigation and top menu are present on every page. The only difference in use cases of these components is the Register vs. Logged in states.</p>
            </div>
          </div>

          <div className="fold__header">
            <div className="container-mid">
              <div className="fold__header__block">
                <h2 className="fold__title margin-reset">Footer</h2>
              </div>
            </div>
          </div>

          <div className="container-mid">
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
        </div>

        <div className="fold container-mid">
          <div className="container-mid">
            <h2 className="fold__title margin-reset">COMMENTS</h2>
            <br/>
            <p>Footer is present on every page of the platform and contains key links to direct the user.</p>
          </div>
        </div>

      </div>
    </React.Fragment>
  );
};
export default NavigationsPage;
