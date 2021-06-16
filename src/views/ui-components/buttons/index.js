import React from "react";
import ReactDOMServer from "react-dom/server";
import {Tab, Tabs, TabList, TabPanel} from "react-tabs";

import Button from "../../../components/button";
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
                        <div className="buttons-page">
                            <h3>Primary / Normal</h3>
                            <Button size="small" type="primary-filled">
                                primary filled button
                            </Button>
                            <Button size="small" type="primary-filled disabled">
                                primary filled disabled button
                            </Button>
                            <br/>
                            <h3>Secondary / Normal</h3>
                            <Button size="small" type="primary-bounded">
                                primary bounded button
                            </Button>
                            <Button size="small" type="primary-bounded disabled">
                                primary bounded button
                            </Button>
                            <h3>Secondary / Normal icon</h3>
                            <Button size="small" type="primary-bounded">
                                <span className='f-icon-download font-size-sm spacing-half-r'></span>
                                Button
                            </Button>
                            <h3>Tertiary / Normal icon</h3>
                            <Button size="small">
                                <span className='f-icon-chevron-left font-size-sm spacing-half-r'></span>
                                Back
                            </Button>
                            <h3>Icon Buttons</h3>
                            <Button size="sm all" type="primary-bounded">
                                <span className='underline f-icon-arrow-down'></span>
                            </Button>
                            <h3>Button dropdown / normal / hover</h3>
                            <Button size="small" type="primary-bounded">
                                Create a Report
                                <span className="f-icon-sm-triangle-down spacing-half-l"></span>
                            </Button>
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
