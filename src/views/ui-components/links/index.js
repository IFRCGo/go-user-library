import React from "react";
import {Tab, Tabs, TabList, TabPanel} from "react-tabs";
import ReactDOMServer from "react-dom/server";

import LinkButton from "../../../components/link-button";
import Link from "../../../components/link";
import Code from "./../../../hoc/source-code";

const htmlString1 = ReactDOMServer.renderToStaticMarkup(
  <Link
    href="#link"
    icon="chevron-right"
    class="link--with-icon"
    name="View emergencies (last 30 days)"
  />
);

const htmlString2 = ReactDOMServer.renderToStaticMarkup(
  <LinkButton
    href="#link"
    classSize="small"
    classType="primary-filled disabled"
    name="primary filled disabled button styled link"
  />
);

const LinksPage = () => {
  return (
    <React.Fragment>
      <div className="inner">
        <div className="fold__header">
          <h1>LINKS</h1>
          <p>Link are used as navigational elements. They may appear on their own, within a sentence or paragraph, or directly following the content.</p>
        </div>
        <br/><br/>

        <div className="fold__header">
          <div className="container-mid">
            <div className="fold__header__block">
              <h2 className="fold__title margin-reset">Links</h2>
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
                  <div className="row flex">
                    <div className="buttons-page">
                      <div>
                        <h4>Regular Links</h4>
                        <Link
                            href="#link"
                            icon="chevron-right"
                            class="link--with-icon"
                            name="View emergencies (last 30 days)"
                        />
                      </div>
                      <div className="fold">
                        <h4>Special Links (top of the page)</h4>
                        <Link
                            href="#link"
                            icon="chevron-right"
                            class="link--with-icon-red"
                            name="Africa Pacific"
                        />
                      </div>
                      <div>
                        <h4>Popup</h4>
                        <Link
                            href="#link"
                            icon="chevron-right"
                            class="link--popup"
                            name="PHILIPPINES"
                        />
                      </div>
                      <div className="fold">
                        <h4>Table</h4>
                        <Link
                            href="#link"
                            class="link--inline"
                            name="Philippines - Emergency 1"
                        />
                      </div>
                      <div>
                        <h4>Email / other links</h4>
                        <Link
                            href="#link"
                            class="link--inline"
                            name="comunicación@cruzroj.org"
                        />
                      </div>
                      <div  className="fold">
                        <h4>Special Email</h4>
                        <LinkButton
                            href="#link"
                            classSize="small"
                            classType="primary-filled"
                            name="comunicación@cruzroj.org"
                        />
                      </div>
                    </div>
                  </div>
                </TabPanel>
                <TabPanel>
                  <Code source={`${htmlString1}`}/>
                </TabPanel>
              </Tabs>
            </div>
            <div className="fold__header">
              <div className="fold__header__block">
                <h2 className="fold__title margin-reset">Button styled links</h2>
              </div>
            </div>
            <div className="fold__body">
              <div className="container-mid">
                <p>This is a button styled link and this is some information</p>
              </div>
            </div>
            
            <div className="tab__wrap">
              <Tabs>
                <TabList>
                  <Tab>Example</Tab>
                  <Tab>Code</Tab>
                </TabList>

                <TabPanel>
                  <div className="buttons-page">
                    <h3>Primary</h3>
                    <LinkButton
                        href="#link"
                        icon="pencil"
                        classSize="small"
                        classType="primary-filled"
                        name="primary filled button styled link"
                    />
                    <LinkButton
                        href="#link"
                        classSize="small"
                        classType="primary-bounded"
                        name="primary bounded button styled link"
                    />
                    <LinkButton
                        href="#link"
                        classSize="small"
                        classType="primary-filled disabled"
                        name="primary filled disabled button styled link"
                    />
                    <LinkButton
                        href="#link"
                        classSize="small"
                        classType="primary-bounded disabled"
                        name="primary bounded disabled button styled link"
                    />
                  </div>
                </TabPanel>
                <TabPanel>
                  <Code source={`${htmlString2}`}/>
                </TabPanel>
              </Tabs>
            </div>

            <div className="fold__body">
              <h2 className="fold__title margin-reset">COMMENTS</h2><br/>
              <p>The Regular Links are the most common usage of the link style across the platform. In some Ccases, to make them stand out. the links are in red (Special Links, Popup). Within tables, the link are undefined while the highlighted email link appears as a button.</p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default LinksPage;
