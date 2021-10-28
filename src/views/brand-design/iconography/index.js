import React from "react";
import Button from "../../../components/button";
import {Tab, Tabs, TabList, TabPanel} from "react-tabs";
// import {Link} from 'react-router-dom';
import {ListData} from "../../../utils/list";

import Code from "../../../hoc/source-code";
import ReactDOMServer from "react-dom/server";

import DREF from "../../../assets/graphics/layout/logo-dref.svg";
import Emergency from "../../../assets/graphics/layout/emergency-brand.svg";
import Appeals from "../../../assets/graphics/layout/logo-appeals.svg";
import Population from "../../../assets/graphics/layout/targeted-population.svg";
import Funding from "../../../assets/graphics/layout/funding-requirements.svg";
import FundingCoverage from "../../../assets/graphics/layout/funding-coverage.svg";

const htmlString = ReactDOMServer.renderToStaticMarkup(
  <span>
    <img src={DREF} alt="text" className="icon-demo"/>
  </span>
);

const htmlStringIcons = ReactDOMServer.renderToStaticMarkup(
  <div>
    <span className='icon-demo f-icon-arrow-up'></span>
    <a href='im@ifrc.org' className='footer-social-each' target='_blank' rel='noreferrer'><span className='f-icon-medium footer-social-icon'></span></a>
  </div>
);

const IconographyPage = () => {

  const data = ListData.footer.col[3].list;
  // console.log(data);

  return (
    <div className="inner">
      <div className="fold__header">
        <h1>ICONOGRAPHY</h1>
        <p>This section contains the iconography used on the GO platform. The icons follow OCHA iconography guidelines, especially when referring to hazards and emergencies (see the OCHA icons here). Some icons from the IFRC Brand Guidelines will also be used according to specific needs, they are also integrated in this section.</p>
        <Button
            size="small"
            type="primary-bounded"
            fname="ifrcIcons"
            ftype="zip"
            icon="download"
            text="Download IFRC Icons"
        />
        <br/><br/>
        <Button
            size="small"
            type="primary-bounded"
            fname="ochaIcons"
            ftype="zip"
            icon="download"
            text="Download OCHA Icons"
        />
        <br/><br/>
        <Button
            size="small"
            type="primary-bounded"
            fname="generalIcons"
            ftype="zip"
            icon="download"
            text="Download General Icons"
        />
      </div>
      <br/><br/>
      <div className="fold__header">
        <div className="container-mid">
          <div className="fold__header__block">
            <h2 className="fold__title margin-reset">Main Icons</h2>
          </div>
        </div>
      </div>

      <div className="">
        <div className="container-mid">
          <div>
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
      <div className="container-mid">
        <div className="container-mid">
          <h2 className="fold__title margin-reset">COMMENTS</h2>
          <br/>
          <p>These icons are used in highlighted cards and with key numbers. They are available to download in IFRC and OCHA links above. </p>
        </div>
      </div>
  
      <div className="fold">
        <div className="fold__header">
          <div className="container-mid">
            <div className="fold__header__block">
              <h2 className="fold__title margin-reset">General System Icons</h2>
            </div>
          </div>
        </div>
        <div className="container-mid">
          <Tabs>
            <TabList>
              <Tab>Example</Tab>
              <Tab>Code</Tab>
            </TabList>

            <TabPanel>
              <br/>
              <div>
                <span className='icon-demo f-icon-arrow-up'></span>
                <span className='icon-demo f-icon-arrow-down'></span>
                <span className='icon-demo f-icon-circle-information'></span>
                <span className='icon-demo f-icon-pencil'></span>
                <span className='icon-demo f-icon-circle-tick'></span>
                <span className='icon-demo f-icon-cash-bag'></span>
                <span className='icon-demo f-icon-calendar'></span>
              </div>
              <div>
              <br/>
                <div className="icon-demo">
                  {data.map((list, i) => (
                    <a
                        href={list.link}
                        className="footer-social-each"
                        target="_blank"
                        rel="noreferrer"
                    >
                      <span className={list.type}></span>
                    </a>
                  ))}
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <Code source={`${htmlStringIcons}`}/>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    
      <div className="container-mid">
        <div className="container-mid">
          <h2 className="fold__title margin-reset">COMMENTS</h2>
          <br/>
          <p>These general icons are used in menus, tables and reports. </p>
        </div>
      </div>
    </div>
  );
};
export default IconographyPage;
