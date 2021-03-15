import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import Button from "../../../components/button";
import LinkButton from "../../../components/link-button";
import Link from "../../../components/link";

const ButtonsPage = () => {
  return (
    <React.Fragment>
      <div className="inner">
        <div className="fold__header">
          <div className="fold__header__block">
            <h2 className="fold__title margin-reset">Buttons</h2>
          </div>
        </div>
        <div className="fold__body">
          <div className="container-full">
            <p>This is a button and this is some information</p>
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
              <Button
                classSize="small"
                classType="primary-filled"
                name="primary filled button"
              />
              <Button
                classSize="small"
                classType="primary-bounded"
                name="primary bounded button"
              />

              <Button
                classSize="small"
                classType="primary-filled disabled"
                name="primary filled disabled button"
              />
              <Button
                classSize="small"
                classType="primary-bounded disabled"
                name="primary bounded disabled button"
              />
            </div>
          </TabPanel>
          <TabPanel>
            <p>Any content 2</p>
          </TabPanel>
        </Tabs>
        <div className="fold__header">
          <div className="fold__header__block">
            <h2 className="fold__title margin-reset">Link Buttons</h2>
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
                <Link
                  href="#link"
                  icon="chevron-right"
                  class="link--with-icon"
                  name="Link with icon"
                />

                <Link
                  href="#link"
                  icon="chevron-right"
                  class="link--with-icon-text"
                  name="Link with icon text"
                />
                <Link
                  href="#link"
                  icon="chevron-right"
                  class="link--with-icon-inner"
                  name="Link with icon inner"
                />

                <Link
                  href="#link"
                  class="link-underline"
                  name="Link underline"
                />
                <Link
                  href="#link"
                  class="link--external"
                  name="Link external"
                />
                <Link href="#link" class="link--table" name="Link table" />
              </div>
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
export default ButtonsPage;
