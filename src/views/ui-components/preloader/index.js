import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import ReactDOMServer from "react-dom/server";
import Code from "./../../../hoc/source-code";
import Spinner from "../../../components/spinner";

const htmlString = ReactDOMServer.renderToStaticMarkup(
  <div className="preloader__block">
    <span>
      <span>
        <a className="preloader" order="1" href="/get-started">
          Home
        </a>
        <span className="preloader__next"> &gt; </span>
      </span>
      <b order="0" to="/ui-components/buttons" className="preloader">
        Preloader
      </b>
    </span>
  </div>
);

const PreloadersPage = () => {
  return (
    <React.Fragment>
      <div className="inner">
        <div className="fold__header">
          <div className="fold__header__block">
            <h2 className="fold__title margin-reset">preloaders</h2>
          </div>
        </div>
        <div className="fold__body">
          <div className="container-full">
            <p>Preloaders appear before the main content of the platform (or indicidual sections) is loaded.</p>
          </div>
        </div>
      </div>
      <div className="tab__wrap">
        <Tabs>
          <TabList>
            <Tab>Example</Tab>
            <Tab>Code</Tab>
          </TabList>

          <TabPanel>
            <b>ICONS</b>


            <Spinner />
          </TabPanel>
          <TabPanel>
            <Code source={`${htmlString}`} />
          </TabPanel>
        </Tabs>
      </div>
      <div className="fold__body">
        <h2 className="fold__title margin-reset">COMMENTS</h2>
        <p>This is the main preloaded icon, which animates between the 3 dots. This icon is displayed on invidual modules or elements when they are loaded separately.</p>
      </div>
    </React.Fragment>
  );
};
export default PreloadersPage;
