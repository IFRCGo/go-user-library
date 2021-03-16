import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import LinkButton from "../../../components/link-button";
import Link from "../../../components/link";

const LinksPage = () => {
  return (
    <React.Fragment>
      <div className="inner">
        <div className="fold__header">
          <div className="fold__header__block">
            <h2 className="fold__title margin-reset">Links </h2>
          </div>
        </div>
        <div className="fold__body">
          <div className="container-full">
            <p>This is a link and this is some information</p>
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
                <div>
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
                <div>
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

                  <div>
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
            </div>
          </TabPanel>
          <TabPanel>
            <p>Any content 2</p>
          </TabPanel>
        </Tabs>

        <div className="fold__header">
          <div className="fold__header__block">
            <h2 className="fold__title margin-reset">Button styled links</h2>
          </div>
        </div>
        <div className="fold__body">
          <div className="container-full">
            <p>This is a button styled link and this is some information</p>
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
            <p>Any content 2</p>
          </TabPanel>
        </Tabs>
      </div>
    </React.Fragment>
  );
};
export default LinksPage;
