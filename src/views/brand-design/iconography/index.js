import React from "react";
import Button from "../../../components/button";
import {Tab, Tabs, TabList, TabPanel} from "react-tabs";
import {Link} from 'react-router-dom';

import Code from "../../../hoc/source-code";
import ReactDOMServer from "react-dom/server";
// import Logo from "../../../assets/graphics/layout/go-logo-2020.svg";

import DREF from "../../../assets/graphics/layout/logo-dref.svg";
import Emergency from "../../../assets/graphics/layout/emergency-brand.svg";
import Appeals from "../../../assets/graphics/layout/logo-appeals.svg";
import Population from "../../../assets/graphics/layout/targeted-population.svg";
import Funding from "../../../assets/graphics/layout/funding-requirements.svg";
import FundingCoverage from "../../../assets/graphics/layout/funding-coverage.svg";

const htmlString = ReactDOMServer.renderToStaticMarkup(
    <Button
        type="submit"
        size="small"
        name="primary filled button"
    />
);

const IconographyPage = () => {
    return (
        <div className="inner">
            <div className="fold__body">
                <div className="container-full">
                    <h1>IconoGraphy</h1>
                    <p>
                        This section contains the iconography used on the GO platform. The icons follow OCHA iconography
                        guidelines, especially when referring to hazards and emergencies (see the OCHA icons here).
                        Some icons from the IFRC Brand Guidelines will also be used according to specific needs, they
                        are also integrated in this section.
                    </p>
                    <Link
                        to="https://github.com/IFRCGo/IFRC-Icons"
                        target="_blank"
                    >
                        <Button
                            size="small"
                            type="primary-bounded"
                            icon="download"
                            text='Download IFRC Icons'
                        />
                    </Link>
                    <Link
                        to="https://github.com/IFRCGo/IFRC-Icons"
                        target="_blank"
                    >
                        <Button
                            size="small"
                            type="primary-bounded"
                            icon="download"
                            text='Download OCHA Icons'
                        />
                    </Link>

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
                                <div className='box__global__content'>
                                    <div className='row flex-xs'>
                                      <span>
                                        <img src={DREF} alt="text" className="icon-demo"/>
                                      </span>
                                        <span>
                                          <img src={Emergency} alt="text" className="icon-demo"/>
                                      </span>
                                        <span>
                                        <img src={Appeals} alt="text" className="icon-demo"/>
                                      </span>
                                        <span>
                                          <img src={Population} alt="text" className="icon-demo"/>
                                      </span>
                                        <span>
                                          <img src={Funding} alt="text" className="icon-demo"/>
                                      </span>
                                        <span>
                                          <img src={FundingCoverage} alt="text" className="icon-demo"/>
                                      </span>
                                    </div>
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
                <p>These icons are used in highlighted cards and with key numbers. They are available to download in
                    IFRC and OCHA links above. </p>
            </div>


            <div className="box_space">
                <div className="container-full">
                    <h1>general system icons</h1>
                    <p>
                        This section contains the iconography used on the GO platform. The icons follow OCHA iconography
                        guidelines, especially when referring to hazards and emergencies (see the OCHA icons here).
                        Some icons from the IFRC Brand Guidelines will also be used according to specific needs, they
                        are also integrated in this section.
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
                                <div>
                                    <span className='icon-demo f-icon-arrow-up'></span>

                                    <span className='icon-demo f-icon-arrow-down'></span>

                                    <span className='icon-demo f-icon-arrow-left'></span>

                                    <span className='icon-demo f-icon-arrow-right'></span>
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
                <p>These general icons are used in menus, tables and reports. </p>
            </div>

        </div>
    );
};
export default IconographyPage;
