import React from "react";
import ReactDOMServer from "react-dom/server";
import {Tab, Tabs, TabList, TabPanel} from "react-tabs";

import Button from "../../../components/button";
import Code from "./../../../hoc/source-code";

const htmlString = ReactDOMServer.renderToStaticMarkup(
    <Button
        type="submit"
        size="small"
        type="primary-filled"
        name="primary filled button"
    />
);

const ButtonsPage = () => {
    return (
        <React.Fragment>
            <div className="inner">
                <div className="fold__header">
                    <div className="fold__header__block">
                        <h2 className="fold__title margin-reset">BUTTONS</h2>
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
                            <h3>Primary / Normal / Hover / Disabled</h3>
                            <Button type="primary-filled">
                                Button
                            </Button>
                            <br/>
                            <h3>Primary Disabled</h3>
                            <Button type="primary-filled disabled">
                                Button
                            </Button>
                            <br/>
                            <h3>Small Secondary / Normal</h3>
                            <Button size="small" type="secondary">
                                Button
                            </Button>
                            <h3>Secondary / Normal</h3>
                            <Button type="secondary">
                                Button
                            </Button>
                            <h3>Secondary / Normal disabled</h3>
                            <Button type="secondary disabled">
                                Button
                            </Button>
                            <br/>
                            <h3>Secondary / Normal icon</h3>
                            <Button type="secondary-bounded">
                                <span><i className="icono-arrow1-down"></i></span> Button
                            </Button>
                            <h3>Tertiary / Normal icon</h3>
                            <Button type="tertiary">
                                <i className="arrow left"></i> Back
                            </Button>
                            <h3>Icon buttons</h3>
                            <Button type="icon round red">
                                <span><i className="icono-arrow1-up"></i></span>
                            </Button>
                            <Button type="icon round white">
                                <span><i className="icono-arrow1-down"></i></span>
                            </Button>


                            <h3>Button dropdown / normal</h3>
                            <Button type="secondary dropdown">
                                Create a Report <i className="icono-arrow4-down"></i>
                            </Button>
                            <h3>Other / normal / hover</h3>
                            <Button type="other">
                                <i className="arrow left"></i><i className="arrow left"></i>  All countries
                            </Button>
                        </div>
                        <div>
                            <h3>BUTTON GUIDELINES</h3>
                            <p>Each page should have the main actions as priary buttons, the remaining calls to action
                                should be reprosoned with secondary or tertiary buttons.</p>
                            <p>Some exceptions are listed here such as highlighted dropdown, collapse button and some
                                single icon buttons.</p>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <Code source={`${htmlString}`}/>
                    </TabPanel>
                </Tabs>
            </div>
        </React.Fragment>
    );
};
export default ButtonsPage;
