import React from "react";
import {Tab, Tabs, TabList, TabPanel} from "react-tabs";
import ReactDOMServer from "react-dom/server";

import Card from "./../../../components/card";
import KeyFigures from "./../../../components/key-figures";
import KeysOverview from "./../../../components/keys-overview";
import Code from "./../../../hoc/source-code";

import imgSrc1 from "./../../../assets/graphics/layout/logo-dref.svg";

const data = [
  {
    key: "Funding Requirements in the last years",
    value: "2,696",
    src: imgSrc1,
    tooltip: {
      title: "DREF",
      description:
        "These are small to medium scale emergency operations funded through the Disaster Relief Emergency Fund (DREF).",
    },
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
    <KeyFigures data={data}/>
);

const htmlString2 = ReactDOMServer.renderToStaticMarkup(<KeysOverview/>);

const CardsPage = () => {
  return (
    <React.Fragment>
      <div className="inner">
        <div className="fold__header">
          <h1>CARDS</h1>
          <p>Cards provide the possiblilty to display content composed of various smaller UI elements. On GO, they are used to highlight key numbers and important information on emergencies</p>
        </div>
        <br/><br/>
        <div className="fold__header">
          <div className="container-mid">
            <div className="fold__header__block">
              <h2 className="fold__title margin-reset">Cards</h2>
            </div>
          </div>
        </div>
      
        <div className="tab__wrap">
          <div className="container-mid">
            <p className="poppins_16 font_weight_500">Highlighted emergencies</p>
            <Tabs>
              <TabList>
                <Tab>Example</Tab>
                <Tab>Code</Tab>
              </TabList>

              <TabPanel>
                <div className="key-emergencies-list row">
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
                <Code source={`${htmlString}`}/>
              </TabPanel>
            </Tabs>
          

            <div className="tab__wrap">
              <p className="poppins_16 font_weight_500">Key figures</p>
              <Tabs>
                <TabList>
                  <Tab>Example</Tab>
                  <Tab>Code</Tab>
                </TabList>

                <TabPanel>
                  
                  <div className="key-emergencies-list row flex-sm">
                      <KeyFigures data={data}/>
                  </div>
                </TabPanel>
                <TabPanel>
                  <Code source={`${htmlString1}`}/>
                </TabPanel>
              </Tabs>
            </div>

            <div className="tab__wrap">
              <p className="poppins_16 font_weight_500">Key figures</p>
              <Tabs>
                <TabList>
                  <Tab>Example</Tab>
                  <Tab>Code</Tab>
                </TabList>

                <TabPanel>
                  <div className="key-emergencies-list row flex-sm">
                    <KeysOverview/>
                  </div>
                </TabPanel>
                <TabPanel>
                  <Code source={`${htmlString2}`}/>
                </TabPanel>
              </Tabs>
            </div>
          
            <h2 className="fold__title margin-reset">Comments</h2>
            <p>The cards are used to highlight key numbers on top of the page, just below the main header. They can vary depending on the page. Highlighted emergencies is a clickable card. While the pthers are just informational.</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default CardsPage;
