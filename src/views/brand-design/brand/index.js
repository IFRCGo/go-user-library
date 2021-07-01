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

const BrandPage = () => {
    return (
        <div className="inner">
            <div className="fold__body">
                <div className="container-full">
                    <h1>IFRC Brand Guidelines</h1>
                    <p>
                        GO guidelines are largely based on IFRC brand guidelines with a few deviations due to how those
                        are displayed on the GO platform. You may refer to IFRC guidelines in the document below.
                    </p>
                    <Link
                        to="https://github.com/IFRCGo/IFRC-Icons"
                        target="_blank"
                    >
                        <Button
                            size="small"
                            type="primary-bounded"
                            icon="download"
                            text='Download IFRC Brand Guidelines'
                        />
                    </Link>

                    <div className="box_space">

                        <div className="fold__header">
                            <div className="fold__header__block">
                                <h2 className="fold__title margin-reset">IFRC Logo</h2>
                            </div>
                        </div>

                        <Tabs>
                            <TabList>
                                <Tab>Example</Tab>
                                <Tab>Code</Tab>
                            </TabList>

                            <TabPanel>
                                <div className="box_space">
                                    <h4>Horizontal Logo</h4>
                                </div>
                                <div className="box_space">
                                    <h4>Vertical Logo</h4>
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
                <p>IFRC logo helps to reframe the IFRC’s identity and positioning as a more dynamic and modern
                    organisation. Also, updating and consolidating the IFRC’s branding guidelines and promoting them
                    internally serves to bring greater coherence to the IFRC’s brand identity.</p>
            </div>
        </div>
    );
};
export default BrandPage;
