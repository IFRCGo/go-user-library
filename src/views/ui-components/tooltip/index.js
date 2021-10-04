import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import ReactDOMServer from "react-dom/server";
import Code from "./../../../hoc/source-code";
// import Alert from "../alert/alert";
import Tooltip from "../../../components/tooltip";

const htmlString = ReactDOMServer.renderToStaticMarkup(
  <div>
    <span>
      <a data-tip="true" data-for="PHILIPPINES" data-event="click focus" currentitem="false" href>
        POPUPs
        <svg className="icon-tooltip" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width={12} height={12} viewBox="0 0 16 16">
          <rect width={12} height={12} id="icon-bound" fill="none" />
          <path d="M7,12h2V7H7V12z M8,4C7.448,4,7,4.448,7,5s0.448,1,1,1c0.552,0,1-0.448,1-1S8.552,4,8,4z M8,0C3.582,0,0,3.582,0,8 c0,4.418,3.582,8,8,8s8-3.582,8-8C16,3.582,12.418,0,8,0z M12.243,12.243C11.109,13.376,9.603,14,8,14s-3.109-0.624-4.243-1.757 C2.624,11.109,2,9.603,2,8s0.624-3.109,1.757-4.243C4.891,2.624,6.397,2,8,2s3.109,0.624,4.243,1.757C13.376,4.891,14,6.397,14,8 C14,9.603,13.376,11.109,12.243,12.243z" stroke="white" fill="black" />
        </svg>
      </a>
      <div className="__react_component_tooltip place-top type-dark" id="PHILIPPINES" aria-haspopup="true" data-id="tooltip">
        <header className="tooltip__header">PHILIPPINES</header>
        <span className="tooltip__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi imperdiet
          leo vel nunc iaculis fermentum eget quis tortor.
        </span>
      </div>
    </span>
  </div>
);

const tooltip = ReactDOMServer.renderToStaticMarkup(
  <div>
    <span>
      <a data-tip="true" data-for="Top Tooltip" data-event="click focus" currentitem="true" href>
        <svg className="icon-tooltip" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width={12} height={12} viewBox="0 0 16 16">
          <rect width={12} height={12} id="icon-bound" fill="none" />
          <path d="M7,12h2V7H7V12z M8,4C7.448,4,7,4.448,7,5s0.448,1,1,1c0.552,0,1-0.448,1-1S8.552,4,8,4z M8,0C3.582,0,0,3.582,0,8 c0,4.418,3.582,8,8,8s8-3.582,8-8C16,3.582,12.418,0,8,0z M12.243,12.243C11.109,13.376,9.603,14,8,14s-3.109-0.624-4.243-1.757 C2.624,11.109,2,9.603,2,8s0.624-3.109,1.757-4.243C4.891,2.624,6.397,2,8,2s3.109,0.624,4.243,1.757C13.376,4.891,14,6.397,14,8 C14,9.603,13.376,11.109,12.243,12.243z" stroke="white" fill="black" />
        </svg>
      </a>
      <div className="__react_component_tooltip show place-top type-dark tooltip" id="Top Tooltip" aria-haspopup="true" data-id="tooltip" style={{left: '307px', top: '649px'}}>
        <header className="tooltip__header">Top Tooltip</header>
        <span className="tooltip__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi imperdiet
          leo vel nunc iaculis fermentum eget quis tortor.
        </span>
      </div>
    </span>
  </div>
);

//const keyIconSrc = {
//  activeDrefs: "/assets/graphics/layout/logo-dref.svg",
//  activeAppeals: "/assets/graphics/layout/logo-appeals.svg",
//  budget: "/assets/graphics/layout/funding-requirements.svg",
//  appealsFunding: "/assets/graphics/layout/funding-coverage.svg",
//  targetPop: "/assets/graphics/layout/targeted-population.svg",
//};

const TooltipPage = () => {
  return (
    <React.Fragment>
      <div className="inner">
        <div className="fold__header">
          <h1>Tooltips & Popups</h1>
          <p>Tooltips display additional information upon click or hover.</p>
        </div>
        <div className="fold__header">
          <div className="container-mid">
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
                <span className="">
                  <Tooltip
                    type={"popup"}
                    title="PHILIPPINES"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi imperdiet leo vel nunc iaculis fermentum eget quis tortor."
                  />
                </span>
              </TabPanel>
              <TabPanel>
                <Code source={`${htmlString}`} />
              </TabPanel>
            </Tabs>
          </div>
        </div>

        <div className="container-mid">
          <div className="container-mid">
            <h2 className="fold__title margin-reset">COMMENTS</h2>
            <br/>
            <p>This popup style is displayed primarily on the maps, when clicking to expand for more information.</p>
          </div>
        </div>

        <div className="fold">
          <div className="fold__header">
            <div className="container-full">
              <div className="fold__header__block">
                <h2 className="fold__title margin-reset">Tooltips</h2>
              </div>
            </div>
            <div className="tab__wrap">
              <Tabs>
                <TabList>
                  <Tab>Example</Tab>
                  <Tab>Code</Tab>
                </TabList>

                <TabPanel>
                  <span className="">
                    <Tooltip
                      title="Top Tooltip"
                      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi imperdiet leo vel nunc iaculis fermentum eget quis tortor."
                    />
                  </span>
                </TabPanel>
                <TabPanel>
                  <Code source={`${tooltip}`} />
                </TabPanel>
              </Tabs>
            </div>

            <div className="container-mid">
              <div className="container-mid">
                <h2 className="fold__title margin-reset">COMMENTS</h2>
                <br/>
                <p>The tooltip shows additional information about specific elements and is displayed when clicking on the tooltip icon.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default TooltipPage;