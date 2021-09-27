import React from "react";
import {Tab, Tabs, TabList, TabPanel} from "react-tabs";
import ReactDOMServer from "react-dom/server";

import Code from "./../../../hoc/source-code";
import Alert from "../alert/alert";

import Search from "../../../assets/graphics/layout/search.svg";
import Calendar from "../../../assets/graphics/layout/calendar.svg";
import Arrow from "../../../assets/graphics/layout/arrow-dropdown.svg";

const htmlString = ReactDOMServer.renderToStaticMarkup(
  <div className="filters__block">
  <span>
    <span>
      <a className="filters" order="1" href="/get-started">
        Home
      </a>
      <span className="filters__next"> &gt; </span>
    </span>
    <b order="0" to="/ui-components/filters" className="filters">
      Filters
    </b>
  </span>
  </div>
);

const FiltersPage = () => {
  return (
    <React.Fragment>
      <div className="inner">
        <div className="fold__header">
          <h1>FILTERS</h1>
          <p>Filtering allows users to highlight/dim down specific items when working through data sets. Filters can help a user see available options within a certain set of criteria and make a decision when faced with a large number of options</p>       
        </div>
        <br/><br/>

        <div className="fold__header">
          <div className="container-mid">
            <div className="fold__header__block">
                <h2 className="fold__title margin-reset">Filters</h2>
            </div>
          </div>
        </div>

        <div className="fold__body">
          <div className="container-mid">
            <div>
              <Tabs>
                <TabPanel>
                  <p className="poppins_16 font_weight_500">Filter for tables and maps</p>
                    <Tabs>
                      <TabList>
                        <Tab>Example</Tab>
                        <Tab>Code</Tab>
                      </TabList>
                      <TabPanel>
                        <p>
                          <span>
                            <img src={Search} alt="Search" className="icon-demo"/>
                          </span>
                          <span>
                            <img src={Calendar} alt="Date" className="icon-demo"/>
                          </span>
                          <span>
                            <img src={Arrow} alt="Select" className="icon-demo"/>
                          </span>
                          More coming soon...
                        </p>
                      </TabPanel>
                      <TabPanel>
                        <Code source="{sourceData(ChartData.line)}"/>
                      </TabPanel>
                    </Tabs>
                  <p className="poppins_16 font_weight_500">Filter/tab for graphs</p>
                  <Alert
                      id='1'
                      option='primary'
                      type='info'
                      text='Coming soon'
                      autoDismiss='0'
                  />
                </TabPanel>
                <TabPanel>
                  <Code source={`${htmlString}`}/>
                </TabPanel>
              </Tabs>
            </div>
            <div className="fold__body">
              <h2 className="fold__title margin-reset">COMMENTS</h2>
              <p>Filters will be mainly used for data tables and for maps. There are a few graphs that also require a filter/tab view to navigate more easily.</p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default FiltersPage;
