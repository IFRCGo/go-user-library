import React from "react";
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
    operationPopulation="People Targeted"
    emergencyDeploymentsErus="74"
    operationCardUnits="Deployed Emergency Response Units"
    requested="22,000,000"
    operationCardFunding="Funding Requirements (CHF)"
    emergencyDeployments="74"
    operationCardDeployed="Deployed Surge Personnel"
    operationCardFundingCoverage="Funding Coverage"
    requestedPercentage="20.49%"
    progressNumber="20.49"
  />
);

const CardsPage = () => {
  return (
    <React.Fragment>
      <div className="inner">
        <div className="fold__header">
          <h1>Cards</h1>
          <p>Placeholder text. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. </p>
        </div>
        <div className="fold__header">
          <div className="fold__header__block">
            <h2 className="fold__title margin-reset">Cards</h2>
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
                operationPopulation="People Targeted"
                emergencyDeploymentsErus="74"
                operationCardUnits="Deployed Emergency Response Units"
                requested="22,000,000"
                operationCardFunding="Funding Requirements (CHF)"
                emergencyDeployments="74"
                operationCardDeployed="Deployed Surge Personnel"
                operationCardFundingCoverage="Funding Coverage"
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
      <div className="container-full">
        <h2 className="fold__title margin-reset">Comments</h2>
        <br /><p>Placeholder text</p>
      </div>
    </React.Fragment>
  );
};
export default CardsPage;
