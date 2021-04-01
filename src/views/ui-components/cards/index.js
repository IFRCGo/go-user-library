import React, { useState, useCallback } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import ReactDOMServer from "react-dom/server";

import Card from "./../../../components/card";
import Code from "./../../../hoc/source-code";

const htmlString = ReactDOMServer.renderToStaticMarkup(
  <Card
    linkTo="#"
    operationName="Indonesia: Earthquakes"
    lastUpdate="Last Updated: Oct 1, 2018"
    beneficiaries="160,000"
    emergencyDeploymentsErus="People Targeted"
    operationCardUnits="74"
    requested="Deployed Emergency Response Units"
    operationCardFunding="22,000,000"
    emergencyDeployments="Funding Requirements (CHF)"
    operationCardDeployed="74"
    operationCardFundingCoverage="Deployed Surge Personnel"
    requestedPercentage="20.49%"
    progressNumber="20.49"
  />
);

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
            <div className="key-emergencies-list row flex-sm">
              <Card
                linkTo="#"
                operationName="Indonesia: Earthquakes"
                lastUpdate="Last Updated: Oct 1, 2018"
                beneficiaries="160,000"
                emergencyDeploymentsErus="People Targeted"
                operationCardUnits="74"
                requested="Deployed Emergency Response Units"
                operationCardFunding="22,000,000"
                emergencyDeployments="Funding Requirements (CHF)"
                operationCardDeployed="74"
                operationCardFundingCoverage="Deployed Surge Personnel"
                requestedPercentage="20.49%"
                progressNumber="20.49"
              />
            </div>
          </TabPanel>
          <TabPanel>
            <Code source={`${htmlString}`} />
          </TabPanel>
        </Tabs>
      </div>
    </React.Fragment>
  );
};
export default CardsPage;
