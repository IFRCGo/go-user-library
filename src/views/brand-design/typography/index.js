import React from "react";
import {Link} from "react-router-dom";
import Button from "../../../components/button";
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
import Code from "../../../hoc/source-code";
import ReactDOMServer from "react-dom/server";
import "./typography.scss";
import Logo from "../../../assets/graphics/layout/go-logo-2020.svg";

const htmlString = ReactDOMServer.renderToStaticMarkup(
    <Button
        type="submit"
        size="small"
        name="primary filled button"
    />
);

const TypographyPage = () => {
    return (
        <div className="inner">
            <div className="fold__body">
                <div className="container-full">
                    <h1>Typography</h1>
                    <p>
                        GO primarily used the following fonts throughout the platform. When matching to the GO
                        styleguide, it’s important not to use additional typefaces to ensure visual consistency.
                    </p>

                    <div className="box_space">

                        <div className="fold__header">
                            <div className="fold__header__block">
                                <h2 className="fold__title margin-reset">Typeface</h2>
                            </div>
                        </div>

                        <Tabs>
                            <TabList>
                                <Tab>Example</Tab>
                                <Tab>Code</Tab>
                            </TabList>

                            <TabPanel>
                                <div className="box_space">
                                    <div className='poppins_40 font_weight_600'>Poppins</div>
                                </div>
                                <div className="box_space">
                                    Used Weights
                                </div>
                                <div className="box_space">
                                    <div className='poppins_24 font_weight_600'>Poppins Semibold</div>
                                </div>
                                <div className="box_space">
                                    <div className='poppins_24 font_weight_500'>Poppins Medium</div>
                                </div>
                                <div className="box_space">
                                    <div className='poppins_24 font_weight_400'>Poppins Regular</div>
                                </div>
                                <div className="box_space">
                                    <div className='poppins_24 font_weight_300'>Poppins Light</div>
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
                <p>The main typeface used is Poppins and can be used in 4 different weights, according to text
                    hierarchy.</p>
            </div>


            <div className="box_space">
                <div className="container-full">

                    <div className="box_space">

                        <div className="fold__header">
                            <div className="fold__header__block">
                                <h2 className="fold__title margin-reset">Text styles</h2>
                            </div>
                        </div>

                        <Tabs>
                            <TabList>
                                <Tab>Example</Tab>
                                <Tab>Code</Tab>
                            </TabList>

                            <TabPanel>
                                <div className="box_space">
                                    <h1>H1 - Semibold 40px</h1>
                                </div>
                                <div className="box_space">
                                    <h2>H2 - Semibold 30px</h2>
                                </div>
                                <div className="box_space">
                                    <h3>H3 - Semibold 24px</h3>
                                </div>
                                <div className="box_space">
                                    <h4>H4 - Semibold 20px</h4>
                                </div>
                                <div className="box_space">
                                    <h5>H5 - Semibold 18px</h5>
                                </div>
                                <div className="box_space">
                                    <div className=''>Subtitle/Text button - Medium 14px</div>
                                </div>
                                <div className="box_space">
                                    <Link to="/" title="Links - Semibold 14px">
                                        Links - Semibold 14px
                                    </Link>
                                </div>
                                <div className="box_space">
                                    <Link to="/" title="Links - Semibold 14px">
                                        Links - Medium 14px
                                    </Link>
                                </div>
                                <div className="box_space">
                                    <div className=''>Body/Text - Semibold 14px</div>
                                </div>
                                <div className="box_space">
                                    <div className=''>Body/Text - Medium 14px</div>
                                </div>
                                <div className="box_space">
                                    <div className=''>Body/Text - Regular 14px</div>
                                </div>
                                <div className="box_space">
                                    <div className=''>Body/Text - Light 14px</div>
                                </div>
                                <div className="box_space">
                                    <div className=''>Subtitle/Text - Medium 12px</div>
                                </div>
                                <div className="box_space">
                                    <div className=''>Subtitle/Text - Medium 12px</div>
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
                <p>These are the main text styles and should be used to ensure consistency on the platform.</p>
            </div>

        </div>
    );
};
export default TypographyPage;
