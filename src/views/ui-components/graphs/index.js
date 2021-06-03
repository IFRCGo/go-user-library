import React from "react";
import {Tab, Tabs, TabList, TabPanel} from "react-tabs";
import ReactDOMServer from "react-dom/server";

import Graphs from "./../../../components/graphs";
import Code from "./../../../hoc/source-code";
import Alert from "../alert/alert";

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

const GraphsPage = () => {
    return (
        <React.Fragment>
            <div className="inner">
                <div className="fold__header">
                    <div className="fold__header__block">
                        <h2 className="fold__title margin-reset">graphs</h2>
                    </div>
                </div>
                <div className="fold__body">
                    <div className="container-full">
                        <p>Data visualization can be expressed in different forms. Graphs are a type a data
                            visualization and a common way of expressing data, showing different data varieties and
                            allowing data comparison.</p>
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
                        <b>DREF AND APPEALS (OVER THE LAST YEAR)</b>
                        <Alert
                            id='1'
                            option='primary'
                            type='warning'
                            text='Warning Alert'
                            autoDismiss='0'
                        />
                        <b>EMERGENCIES BY TYPE (YTD)</b>
                        <Alert
                            id='1'
                            option='primary'
                            type='warning'
                            text='Warning Alert'
                            autoDismiss='0'
                        />
                        <b>EMERGENCIES OVER TIME (YTD)</b>
                        <Alert
                            id='1'
                            option='primary'
                            type='warning'
                            text='Warning Alert'
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
                <p>The charts are mostly used with a title inside a card - with a standard width and shadow effect.</p>
            </div>
        </React.Fragment>
    );
};
export default GraphsPage;
