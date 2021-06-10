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
                            <h3>Primary</h3>
                            <Button size="small" type="primary-filled">
                                primary filled button
                            </Button>
                            <Button size="small" type="primary-filled disabled">
                                primary filled disabled button
                            </Button>
                            <br/>
                            <Button size="small" type="primary-bounded">
                                primary bounded button
                            </Button>
                            <Button size="small" type="primary-bounded disabled">
                                primary bounded button
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
