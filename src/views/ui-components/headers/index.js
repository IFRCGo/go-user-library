import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import ReactDOMServer from "react-dom/server";
import Code from "./../../../hoc/source-code";
import Alert from "../alert/alert";
import Headers from "../../../components/headers";
import DataOne from "./dataOne";

const htmlString = ReactDOMServer.renderToStaticMarkup(
  <Headers
    breadcrumb={false}
    id="1"
    title="IFRC Disaster Response and Preparedness"
    url="/"
    description='"IFRC GO aims to make all disaster information universally accessible and useful to IFRC responders for better decision making."'
    data={DataOne}
  />
);

const HeadersPage = () => {
  return (
    <React.Fragment>
      <div className="inner">
        <div className="fold__header">
          <h1>HEADERS</h1>
          <p>The content header contains core information about the current page, in most common usage including the page title and key figures.</p>
        </div>
        <br/><br/>

        <div className="fold__header">
          <div className="container-mid">
            <div className="fold__header__block">
              <h2 className="fold__title margin-reset">page header</h2>
            </div>
          </div>
        </div>
      
        <div className="fold__body">
          <div className="container-mid">
            <Tabs>
              <TabList>
                <Tab>Example</Tab>
                <Tab>Code</Tab>
              </TabList>

              <TabPanel style={{overflow: 'hidden'}}>
                <div style={{position: 'relative', top: '0', left: '0', overflow: 'scroll'}}>
                  <Headers
                    breadcrumb={false}
                    id="1"
                    title="IFRC Disaster Response and Preparedness"
                    url="/"
                    description='"IFRC GO aims to make all disaster information universally accessible and useful to IFRC responders for better decision making."'
                    data={DataOne}
                  />
                </div>
                <br/><br/><br/>
                <div style={{position: 'relative', overflow: 'scroll'}}>
                  <Headers
                    breadcrumb={true}
                    id="2"
                    title="Emergencies"
                    url="/emergencies"
                    urlText="All Emergencies"
                    data={DataOne}
                  />
                </div>
                <br/><br/><br/>
                <div style={{position: 'relative', overflow: 'scroll'}}>
                  <Headers
                    breadcrumb={true}
                    id="2"
                    title="Philippines"
                    url="/emergencies"
                    urlText="Region: Asia Pacific"
                    data={DataOne}
                  />
                </div>
              </TabPanel>
              <TabPanel>
                <Code source={`${htmlString}`} />
              </TabPanel>
            </Tabs>
          </div>
        </div>

        <br/><br/>
        <div className="fold">
          <div className="fold__header">
            <div className="container-mid">
              <div className="fold__header__block">
                <h2 className="fold__title margin-reset">header tabs</h2>
              </div>
            </div>
          </div>
        
          <div className="fold__body">
            <div className="container-mid">
              <Tabs>
                {/*<TabList>
                  <Tab>Example</Tab>
                  <Tab>Code</Tab>
                </TabList>*/}

                <TabPanel>
                  <Alert
                    id="1"
                    option="primary"
                    type="info"
                    text="Coming soon"
                    autoDismiss="0"
                  />
                </TabPanel>
                <TabPanel>
                  <Code source={`${htmlString}`} />
                </TabPanel>
              </Tabs>
            </div>
          </div>
        </div>
        
        <div className="container-mid">
          <div className="container-mid">
            <h2 className="fold__title margin-reset">COMMENTS</h2>
            <br/>
            <p>In some secondary pages, the headers may include tabs along with the title to created a hierachy of information.</p>
          </div>
        </div>

        <br/><br/>
        <div className="fold">
          <div className="fold__header">
            <div className="container-mid">
              <div className="fold__header__block">
                <h2 className="fold__title margin-reset">sections</h2>
              </div>
            </div>
          </div>
        
          <div className="fold__body">
            <div className="container-mid">
              <Tabs>
                {/*<TabList>
                  <Tab>Example</Tab>
                  <Tab>Code</Tab>
                </TabList>*/}

                <TabPanel>
                  <Alert
                    id="1"
                    option="primary"
                    type="info"
                    text="Coming soon"
                    autoDismiss="0"
                  />
                </TabPanel>
                <TabPanel>
                  <Code source={`${htmlString}`} />
                </TabPanel>
              </Tabs>
            </div>
          </div>
        </div>
        
        <div className="container-mid">
          <div className="container-mid">
            <h2 className="fold__title margin-reset">COMMENTS</h2>
            <br/>
            <p>Section headers include the section title and a “view all” link. Typically, this link is a way to see the extended content for that section. A description of the section can be added before the section title as needed.</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default HeadersPage;