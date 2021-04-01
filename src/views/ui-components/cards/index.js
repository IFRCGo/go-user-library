import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import ReactDOMServer from "react-dom/server";

import Card from "./../../../components/card";
import KeyFigures from "./../../../components/key-figures";
import Code from "./../../../hoc/source-code";

import imgSrc1 from "./../../../assets/graphics/layout/logo-dref.svg";

const data = [
  {
    key: "Funding Requirements in the last years",
    value: "2,696",
    src: imgSrc1,
  },
];

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

const htmlString1 = ReactDOMServer.renderToStaticMarkup(
  <KeyFigures data={data} />
);

const CardsPage = () => {
  return (
    <React.Fragment>
      <div className="inner">
        <div className="fold__header">
          <div className="fold__header__block">
            <h2 className="fold__title margin-reset">Card</h2>
          </div>
        </div>
        <div className="fold__body">
          <div className="container-full">
            <p>This is a Card and this is some information</p>
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
            <h3>Highlighted emergencies</h3>
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
      <div className="tab__wrap">
        <Tabs>
          <TabList>
            <Tab>Example</Tab>
            <Tab>Code</Tab>
          </TabList>

          <TabPanel>
            <h3>Key figures</h3>
            <div className="key-emergencies-list row flex-sm">
              <KeyFigures data={data} />
            </div>
          </TabPanel>
          <TabPanel>
            <Code source={`${htmlString1}`} />
          </TabPanel>
        </Tabs>
      </div>
    </React.Fragment>
  );
};
export default CardsPage;
