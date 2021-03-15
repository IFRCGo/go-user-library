import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import Button from "../../../components/button";

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
      </div>
    </React.Fragment>
  );
};
export default ButtonsPage;
