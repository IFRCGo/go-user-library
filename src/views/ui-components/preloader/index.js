import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import ReactDOMServer from "react-dom/server";
import Code from "./../../../hoc/source-code";
import Spinner from "../../../components/spinner";

const htmlString = ReactDOMServer.renderToStaticMarkup(
  <div aria-labelledby="react-tabs-116" class="react-tabs__tab-panel react-tabs__tab-panel--selected" id="react-tabs-117" role="tabpanel">
    <br/>
    <div class="spinner">
      <div class="spinner__bounce"></div>
      <div class="spinner__bounce"></div>
      <div class="spinner__bounce"></div>
    </div>
  </div>
);

const PreloadersPage = () => {
  return (
    <React.Fragment>
      <div className="inner">
        <div className="fold__header">
          <h1>PRELOADERS</h1>
          <p>Preloaders appear before the main content of the platform (or indicidual sections) is loaded.</p>
        </div>
        <br/><br/>

        <div className="fold__header">
          <div className="container-mid">
            <div className="fold__header__block">
              <h2 className="fold__title margin-reset">ICONS</h2>
            </div>
          </div>
        </div>

        <div className="container-mid">
          <Tabs>
            <TabList>
              <Tab>Example</Tab>
              <Tab>Code</Tab>
            </TabList>

            <TabPanel>
              <br/>
              <Spinner />
            </TabPanel>
            <TabPanel>
              <Code source={`${htmlString}`} />
            </TabPanel>
          </Tabs>

        
          <div className="fold container-mid">
            <h2 className="fold__title margin-reset">COMMENTS</h2>
            <br/>
            <p>This is the main preloaded icon, which animates between the 3 dots. This icon is displayed on invidual modules or elements when they are loaded separately.</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default PreloadersPage;
