import React from "react";
import {Tab, Tabs, TabList, TabPanel} from "react-tabs";
import ReactDOMServer from "react-dom/server";

import Tables from "./../../../components/tables";
import Code from "./../../../hoc/source-code";
import Alert from "../alert/alert";

const htmlString = ReactDOMServer.renderToStaticMarkup(
    <div className="tables__block">
    <span>
      <span>
        <a className="tables" order="1" href="/get-started">
          Home
        </a>
        <span className="tables__next"> &gt; </span>
      </span>
      <b order="0" to="/ui-components/tables" className="tables">
        Tables
      </b>
    </span>
    </div>
);

const TablesPage = () => {
    return (
        <React.Fragment>
            <div className="inner">
                <div className="fold__header">
                    <div className="fold__header__block">
                        <h2 className="fold__title margin-reset">tables</h2>
                    </div>
                </div>
                <div className="fold__body">
                    <div className="container-full">
                        <p>Tables are used to organise and display data efficiently. The data table component allows for
                            customization with additional functionality.</p>
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
                        <b>Table / Label 56px</b>
                        <Alert
                            id='1'
                            option='primary'
                            type='warning'
                            text='Warning Alert'
                            autoDismiss='0'
                        />

                        <b>Table / Body 56px</b>
                        <Alert
                            id='1'
                            option='primary'
                            type='warning'
                            text='Warning Alert'
                            autoDismiss='0'
                        />

                        <b>Table / Body 72px</b>
                        <Alert
                            id='1'
                            option='primary'
                            type='warning'
                            text='Warning Alert'
                            autoDismiss='0'
                        />

                        <b>TABLE EXAMPLE</b>
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
            <p>Table elements are organised in groups to facilitate the creation of patterns. Table can be single-lined (56px) or double-lined (72px).</p>
          </div>
        </React.Fragment>
    );
};
export default TablesPage;
