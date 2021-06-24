import React from "react";
import {Tab, Tabs, TabList, TabPanel} from "react-tabs";
import ReactDOMServer from "react-dom/server";
import Code from "./../../../hoc/source-code";
import Alert from "../alert/alert";
import Tooltip from "../../../components/tooltip";

const htmlString = ReactDOMServer.renderToStaticMarkup(
    <div className="tooltip__block">
    <span>
      <span>
        <a className="home" order="1" href="/get-started">
          Home
        </a>
        <span className="tables__next"> &gt; </span>
      </span>
      <b order="0" to="/ui-components/tooltip" className="tooltip">
        Tooltip
      </b>
    </span>
    </div>
);

const keyIconSrc = {
    activeDrefs: '/assets/graphics/layout/logo-dref.svg',
    activeAppeals: '/assets/graphics/layout/logo-appeals.svg',
    budget: '/assets/graphics/layout/funding-requirements.svg',
    appealsFunding: '/assets/graphics/layout/funding-coverage.svg',
    targetPop: '/assets/graphics/layout/targeted-population.svg'
};

const TooltipPage = () => {
    return (
        <React.Fragment>
            <div className="fold__header">
                <h1>Tooltips & Popups</h1>
                <p>Tooltips display additional information upon click or hover.</p>
            </div>
            <div className="fold__header">
                <div className="fold__header">
                    <div className="fold__header__block">
                        <h2 className="fold__title margin-reset">POPUPS</h2>
                    </div>
                </div>
                <div className="tab__wrap">
                    <Tabs>
                        <TabList>
                            <Tab>Example</Tab>
                            <Tab>Code</Tab>
                        </TabList>

                        <TabPanel>
                        <span className=''>
                            <Tooltip
                                type={'popup'}
                                title='PHILIPPINES'
                                description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi imperdiet leo vel nunc iaculis fermentum eget quis tortor.'
                            />
                          </span>
                        </TabPanel>
                        <TabPanel>
                            <Code source={`${htmlString}`}/>
                        </TabPanel>
                    </Tabs>
                </div>
                <div className="fold__body">
                    <h2 className="fold__title margin-reset">COMMENTS</h2>
                    <p>This popup style is displayed primarily on the maps, when clicking to expand for more
                        information.</p>
                </div>

            </div>

            <div className="container-full">
                <div className="fold__header">
                    <div className="fold__header__block">
                        <p><h2 className="fold__title margin-reset">Tooltips</h2></p>
                    </div>
                </div>
                <div className="tab__wrap">
                    <Tabs>
                        <TabList>
                            <Tab>Example</Tab>
                            <Tab>Code</Tab>
                        </TabList>

                        <TabPanel>
                        <span className=''>
                            <Tooltip
                                title='Top Tooltip'
                                description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi imperdiet leo vel nunc iaculis fermentum eget quis tortor.'
                            />
                          </span>
                        </TabPanel>
                        <TabPanel>
                            <Code source={`${htmlString}`}/>
                        </TabPanel>
                    </Tabs>
                </div>
                <div className="fold__body">
                    <h2 className="fold__title margin-reset">COMMENTS</h2>
                    <p>The tooltip shows additional information about specific elements and is displayed when clicking
                        on the tooltip icon. </p>
                </div>
            </div>
        </React.Fragment>
    );
};
export default TooltipPage;
