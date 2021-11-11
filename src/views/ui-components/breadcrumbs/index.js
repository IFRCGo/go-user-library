import React from "react";
import {Tab, Tabs, TabList, TabPanel} from "react-tabs";
import ReactDOMServer from "react-dom/server";

import BreadCrumb from "./../../../components/breadcrumb";
import Code from "./../../../hoc/source-code";

const htmlString = ReactDOMServer.renderToStaticMarkup(
  <div className="breadcrumb__block">
    <span>
      <span>
        <a className="breadcrumb" order="1" href="/get-started">
          Home
        </a>
        <span className="breadcrumb__next"> &gt; </span>
      </span>
      <b order="0" to="/ui-components/buttons" className="breadcrumb">
        BreadCrumb
      </b>
    </span>
  </div>
);

const BreadcrumbsPage = () => {
  return (
    <React.Fragment>
      <div className="inner">
        <div className="fold__header">
          <h1>BREADCRUMBS</h1>
          <p>Breadcrumbs are a secondary navigation pattern that help users understand the hierachy between levels and navigate through them.</p>
        </div>
        <br/><br/>

        <div className="fold__header">
          <div className="container-mid">
            <div className="fold__header__block">
              <h2 className="fold__title margin-reset">Breadcrumbs</h2>
            </div>
          </div>
        </div>

        <div className="container-mid">
          <div>
            <Tabs>
              <TabList>
                <Tab>Example</Tab>
                <Tab>Code</Tab>
              </TabList>

              <TabPanel>
              <br/>
                <BreadCrumb
                    crumbs={[
                      {link: "/ui-components/buttons", name: "Country"},
                      {link: "/ui-components", name: "Region"},
                      {link: "/get-started", name: "Home"},
                    ]}
                />
              </TabPanel>
              <TabPanel>
                <Code source={`${htmlString}`}/>
              </TabPanel>
            </Tabs>
          </div>
        </div>

        <div className="fold container-mid">
          <div className="container-mid">
            <h2 className="fold__title margin-reset">COMMENTS</h2>
            <br/>
            <p>They will be used in the page header to show the pathway from the main page to specific countries and emergencies.</p>
          </div>
        </div>

      </div>
    </React.Fragment>
  );
};
export default BreadcrumbsPage;
