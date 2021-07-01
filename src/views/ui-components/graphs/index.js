import React from "react";
import {Tab, Tabs, TabList, TabPanel} from "react-tabs";
import ReactDOMServer from "react-dom/server";

import Code from "./../../../hoc/source-code";
import ApexChart from "./apexchart";
import ChartData from "./list.js"

const htmlString = ReactDOMServer.renderToStaticMarkup(
  <div className="graphs__block">
    <span>
      <span>
        <a className="graphs" order="1" href="/get-started">
          Home
        </a>
        <span className="graphs__next"> &gt; </span>
      </span>
      <b order="0" to="/ui-components/graphs" className="graphs">
        Graphs
      </b>
    </span>
  </div>
);

function sourceData(data) {
  const AlertString = ReactDOMServer.renderToStaticMarkup(
    <ApexChart
      data={data}
    />);
  return AlertString;
}


const GraphsPage = () => {
  return (
    <React.Fragment>
      <div className="inner">
        <div className="fold__header">
          <h1>GRAPHS</h1>
          <p>Data visualization can be expressed in different forms. Graphs are a type a data visualization and a common way of expressing data, showing different data varieties and allowing data comparison.</p>
          <p>Example Charts - https://apexcharts.com/react-chart-demos</p>
        </div>
        <br/><br/>

        <div className="fold__header">
          <div className="container-mid">
            <div className="fold__header__block">
              <h2 className="fold__title margin-reset">Graphs</h2>
            </div>
          </div>
        </div>
        <div className="fold__body">
          <div className="container-mid">
            <div className="tab__wrap">
              <Tabs>
                <TabList>
                  <Tab>Example</Tab>
                  <Tab>Code</Tab>
                </TabList>
                <TabPanel>
                  <ApexChart
                      data={ChartData.line}
                  />
                </TabPanel>
                <TabPanel>
                  <Code source={sourceData(ChartData.line)}/>
                </TabPanel>
              </Tabs>
              <div className="fold">
                <Tabs>
                  <TabList>
                    <Tab>Example</Tab>
                    <Tab>Code</Tab>
                  </TabList>
                  <TabPanel>
                    <ApexChart
                        data={ChartData.bar}
                    />
                  </TabPanel>
                  <TabPanel>
                    <Code source={sourceData(ChartData.bar)}/>
                  </TabPanel>
                </Tabs>
              </div>
              <Tabs>
                <TabList>
                  <Tab>Example</Tab>
                  <Tab>Code</Tab>
                </TabList>
                <TabPanel>
                  <ApexChart
                      data={ChartData.apexChart}
                  />
                </TabPanel>
                <TabPanel>
                  <Code source={sourceData(ChartData.apexChart)}/>
                </TabPanel>
              </Tabs>
            </div>
            <div className="fold">
              <div className="fold__body">
                  <h2 className="fold__title margin-reset">COMMENTS</h2>
                  <p>The charts are mostly used with a title inside a card - with a standard width and shadow effect.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default GraphsPage;
