import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import Button from "../../../components/button";

class ButtonsPage extends Component {
  render() {
    return (
      <div>
        <div className="inner">
          <div className="fold fold--main">
            <div className="container-lg">
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
          </div>
        </div>
        <div className="tab__wrap">
          <Tabs>
            <TabList>
              <Tab>Example</Tab>
              <Tab>Code</Tab>
            </TabList>

            <TabPanel>
              <Button name="this is a button" />
            </TabPanel>
            <TabPanel>
              <p>Any content 2</p>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    );
  }
}

export default ButtonsPage;
