import React from "react";
import {Tab, Tabs, TabList, TabPanel} from "react-tabs";
import ReactDOMServer from "react-dom/server";
import Code from "./../../../hoc/source-code";
import Alert from "../alert/alert";

const htmlString = ReactDOMServer.renderToStaticMarkup(
    <div className="tooltip__block">
    <span>
      <span>
        <a className="home" order="1" href="/get-started">
          Home
        </a>
        <span className="tables__next"> &gt; </span>
      </span>
      <b order="0" to="/ui-components/tooltip" className="tooltip">
        Tooltip
      </b>
    </span>
    </div>
);

const TooltipPage = () => {
    return (
        <React.Fragment>
            <div className="inner">
                <div className="fold__header">
                    <div className="fold__header__block">
                        <h2 className="fold__title margin-reset">Tooltips & popups</h2>
                    </div>
                </div>
                <div className="fold__body">
                    <div className="container-full">
                        <p>Tooltips display additional information upon click or hover.</p>
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
                        <b>POP UPS</b>
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
            <p>This popup style is displayed primarily on the maps, when clicking to expand for more information.</p>
          </div>
        </React.Fragment>
    );
};
export default TooltipPage;
