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
            <br />
            <Button class="filled" name="this is red button" />
            <Button
              class="filled disabled"
              name="this is a red disabled button"
            />
            <br />
            <br />
            <Button class="bounded" name="this is a white button" />
            <Button
              class="bounded disabled"
              name="this is a white disabled button"
            />

            <br />
            <br />
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
