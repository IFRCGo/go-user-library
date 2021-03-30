import React, { useState, useCallback } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import ReactDOMServer from "react-dom/server";

import Card from "./../../../components/card";
import Code from "./../../../hoc/source-code";

// const htmlString = ReactDOMServer.renderToStaticMarkup(
//   <ConfirmModal
//     title="this is a modal"
//     message="This is the content"
//     okText="OK"
//   />
// );

const CardsPage = () => {
  return (
    <React.Fragment>
      <div className="inner">
        <div className="fold__header">
          <div className="fold__header__block">
            <h2 className="fold__title margin-reset">Modal</h2>
          </div>
        </div>
        <div className="fold__body">
          <div className="container-full">
            <p>This is a Modal and this is some information</p>
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
            <div className="key-emergencies-list key-emergencies-list-short row flex-sm">
              <Card />
            </div>
          </TabPanel>
          <TabPanel>{/* <Code source={`${htmlString}`} /> */}</TabPanel>
        </Tabs>
      </div>
    </React.Fragment>
  );
};
export default CardsPage;
