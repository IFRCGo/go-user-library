import React from "react";
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
import Code from "../../../hoc/source-code";
import ReactDOMServer from "react-dom/server";
import Icon from "../../../assets/graphics/layout/logo-icon.svg";
import FavIcon from "../../../assets/graphics/layout/apple-touch-icon-114x114.png";
import GoIcon from "../../../assets/graphics/layout/ifrc_logo_2020.svg";

const htmlString = ReactDOMServer.renderToStaticMarkup(
  <span>
    <img src={Icon} alt="text" className="icon-demo1"/>
  </span>
);

const LogoPage = () => {
  return (
    <div className="inner">
      <div className="fold__header">
        <h1>LOGO</h1>
        <p>This section specifies two GO-IFRC logo alignments that can be used on the GO platform</p>
      </div>
      <br/><br/>

      <div className="fold__header">
        <div className="container-mid">
          <div className="fold__header__block">
            <h2 className="fold__title margin-reset">Logo</h2>
          </div>
        </div>
      </div>

      <div className="fold__body">
        <div className="container-mid">
          <Tabs>
            <TabList>
              <Tab>Example</Tab>
              <Tab>Code</Tab>
            </TabList>

            <TabPanel>
              <div className="box_space">
                <h4>Page</h4>
                <div className="icon-center">
                  <img src={Icon} alt="text" className="icon-demo1"/><br/>
                  <img src={GoIcon} alt="text" className="icon-demo2"/>
                </div>
              </div>
              <br/>
              <div className="box_space">
                <h4>Top navigation</h4>
                <div className="icon-center">
                  <img src={GoIcon} alt="text" className="icon-demo3"/>
                </div>
              </div>
              <br/>
              <div className="box_space">
                <h4>Favicon</h4>
                <div className="icon-center">
                  <img src={FavIcon} alt="text" className="fav-icon"/>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <Code source={`${htmlString}`}/>
            </TabPanel>
          </Tabs>
        </div>
      </div>
      <br/><br/>
      <div className="container-mid">
        <div className="container-mid">
          <h2 className="fold__title margin-reset">COMMENTS</h2>
          <br/>
          <p>GO logo will be used in the top navigation with the IFRC logo on the right side. The logo can be used in vertical alignment when there is more room to it, such as on pre-loader pages and others. </p>
        </div>
      </div>
    </div>
  );
};
export default LogoPage;
