import React from "react";
import ReactDOMServer from "react-dom/server";
import {Tab, Tabs, TabList, TabPanel} from "react-tabs";

import Button from "../../../components/button";
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton';
import Code from "./../../../hoc/source-code";

const htmlString = ReactDOMServer.renderToStaticMarkup(
    <Button
        type="submit"
        size="small"
        name="primary filled button"
    />
);

const ButtonsPage = () => {
  return (
    <React.Fragment>
      <div className="inner">
        <div className="fold__header">
          <h1>BUTTONS</h1>
          <p>Buttons are clickable elements that are used to trigger actions. There are 3 main levels of hierarchy and a few exceptions</p>
        </div>
        <br/><br/>
        <div className="fold__header">
          <div className="container-mid">
            <div className="fold__header__block">
              <h2 className="fold__title margin-reset">Buttons</h2>
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
              <div>
                <p>Primary Normal</p>
                <Button
                  size="small"
                  type="primary-filled"
                  text='Button'
                />
                <br/><br/>
                <p>Primary disabled</p>
                <Button
                  size="small"
                  type="primary-filled disabled"
                  text='Button disabled'
                />
                <div className="fold">
                  <p>Secondary Normal</p>
                  <Button
                    size="small"
                    type="primary-bounded"
                    text='Button'
                  />
                  <br/><br/>
                  <p>Secondary disabled</p>
                  <Button
                    size="small"
                    type="primary-bounded disabled"
                    text='Button disabled'
                  />
                </div>
                    
                <p>Secondary / Normal icon</p>
                <Button
                  size="small"
                  type="primary-bounded"
                  icon="download"
                  text='Button'
                />
                <div className="fold">
                  <p>Tertiary / Normal icon</p>
                  <Button
                    size="small"
                    text='Back'
                    icon="back"
                  />
                </div>
                <p>Icon Buttons</p>
                <Button
                  size="sm all"
                  type="primary-bounded"
                  icon="down"
                />
                <div className="fold">
                  <p>Button dropdown / normal / hover</p>
                  <Dropdown>
                    <Dropdown.Toggle
                        className="drop__toggle--caret button button--primary-bounded button--small drop__toggle--field-report-new tc-dropdown-menu"
                    >
                        Create a Report
                    </Dropdown.Toggle>

                    <Dropdown.Menu className='drop__menu drop__menu__field__report'>
                      <Dropdown.Item href="#/action-1" className='drop__menu-item'>Action</Dropdown.Item>
                      <Dropdown.Item href="#/action-2" className='drop__menu-item'>Another action</Dropdown.Item>
                      <Dropdown.Item href="#/action-3" className='drop__menu-item'>Something else</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
                <p>Other / normal</p>
                <Button
                  size="small"
                  text='All countries'
                  icon="double-back"
                />
              </div>
            </TabPanel>
            <TabPanel>
                <Code source={`${htmlString}`}/>
            </TabPanel>
          </Tabs>

          <div className="container-mid">
            <div className="fold">
              <h2 className="fold__title margin-reset">Button guidelines</h2>
              <br/>
              <p>Each page should have the main actions as primary buttons, the remaining calls to action should be represented with secondary or tertiary buttons. Some exceptions are listed here such as highlighted dropdown, collapse button and some single icon buttons.</p>
            </div>    
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default ButtonsPage;
