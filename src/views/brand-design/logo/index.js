import React from "react";
import {Link} from "react-router-dom";
import Button from "../../../components/button";
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
import Code from "../../../hoc/source-code";
import ReactDOMServer from "react-dom/server";

const htmlString = ReactDOMServer.renderToStaticMarkup(
    <Button
        type="submit"
        size="small"
        name="primary filled button"
    />
);

const LogoPage = () => {
    return (
        <div className="inner">
            <div className="fold__body">
                <div className="container-full">
                    <h1>Logo</h1>
                    <p>
                        This section specifies two GO-IFRC logo alignments that can be used on the GO platform
                    </p>

                    <div className="box_space">

                        <div className="fold__header">
                            <div className="fold__header__block">
                                <h2 className="fold__title margin-reset">Buttons</h2>
                            </div>
                        </div>

                        <Tabs>
                            <TabList>
                                <Tab>Example</Tab>
                                <Tab>Code</Tab>
                            </TabList>

                            <TabPanel>
                                <div className="box_space">
                                    <h4>Page</h4>
                                </div>
                                <div className="box_space">
                                    <h4>Top navigation</h4>
                                </div>
                                <div className="box_space">
                                    <h4>Favicon</h4>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <Code source={`${htmlString}`}/>
                            </TabPanel>
                        </Tabs>
                    </div>
                </div>
            </div>
            <div className="box_space">
                <h2 className="fold__title margin-reset">COMMENTS</h2>
                <p>GO logo will be used in the top navigation with the IFRC logo on the right side.
                    The logo can be used in vertical alignment when there is more room to it, such as on pre-loader
                    pages and others. </p>
            </div>

        </div>
    );
};
export default LogoPage;
