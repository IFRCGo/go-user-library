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
                    <div className="fold__header__block">
                        <h2 className="fold__title margin-reset">Buttons</h2>
                    </div>
                </div>
                <div className="fold__body">
                    <div className="container-full">
                        <p>Buttons are clickable elements that are used to trigger actions. There are 3 main levels of
                            hierarchy and a few exceptions</p>
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
                            <h3>Primary / Normal</h3>
                            <Button
                                size="small"
                                type="primary-filled"
                                text='primary filled button'
                            />

                            <Button
                                size="small"
                                type="primary-filled"
                                text='primary filled button'
                            />
                            <Button
                                size="small"
                                type="primary-filled disabled"
                                text='primary filled disabled button'
                            />
                            <br/>
                            <h3>Secondary / Normal</h3>
                            <Button
                                size="small"
                                type="primary-bounded"
                                text='primary bounded button'
                            />
                            <Button
                                size="small"
                                type="primary-bounded disabled"
                                text='primary bounded button'
                            />
                            <h3>Secondary / Normal icon</h3>
                            <Button
                                size="small"
                                type="primary-bounded"
                                icon="download"
                                text='Button'
                            />
                            <h3>Tertiary / Normal icon</h3>
                            <Button
                                size="small"
                                text='Back'
                                icon="back"
                            />
                            <h3>Icon Buttons</h3>
                            <Button
                                size="sm all"
                                type="primary-bounded"
                                icon="down"
                            />
                            <h3>Button dropdown / normal / hover</h3>
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
                            <h3>Other / normal</h3>
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
            </div>
            <div className="fold__body">
                <h2 className="fold__title margin-reset">COMMENTS</h2>
                <p></p>
            </div>
        </React.Fragment>
    );
};
export default ButtonsPage;
