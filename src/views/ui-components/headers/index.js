import React from "react";
import {Tab, Tabs, TabList, TabPanel} from "react-tabs";
import ReactDOMServer from "react-dom/server";
import Code from "./../../../hoc/source-code";
import Alert from "../alert/alert";

const htmlString = ReactDOMServer.renderToStaticMarkup(
    <div className="headers__block">
    <span>
      <span>
        <a className="headers" order="1" href="/get-started">
          Home
        </a>
        <span className="headers__next"> &gt; </span>
      </span>
      <b order="0" to="/ui-components/buttons" className="headers">
        Headers
      </b>
    </span>
    </div>
);

const HeadersPage = () => {
    return (
        <React.Fragment>
            <div className="inner">
                <div className="fold__header">
                    <div className="fold__header__block">
                        <h2 className="fold__title margin-reset">headers</h2>
                    </div>
                </div>
                <div className="fold__body">
                    <div className="container-full">
                        <p>The content header contains core information about the current page, in most common usage
                            including the page title and key figures.</p>
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
                        <b>IFRC Disaster Response and Preparedness</b>
                        <Alert
                            id='1'
                            option='primary'
                            type='info'
                            text='Coming soon'
                            autoDismiss='0'
                        />
                        <b>Emergencies</b>
                        <Alert
                            id='1'
                            option='primary'
                            type='info'
                            text='Coming soon'
                            autoDismiss='0'
                        />
                        <b>Philippines</b>
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
                <p>In some secondary pages, the headers may include tabs along with the title to created a hierachy of
                    information.</p>
            </div>
        </React.Fragment>
    );
};
export default HeadersPage;
