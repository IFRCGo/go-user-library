import React from "react";
import {Link} from "react-router-dom";
// import Button from "../../../components/button";
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
import Code from "../../../hoc/source-code";
import ReactDOMServer from "react-dom/server";
import "./typography.scss";
// import Logo from "../../../assets/graphics/layout/go-logo-2020.svg";

const htmlString = ReactDOMServer.renderToStaticMarkup(
  <div>
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
  </div>
);

const textStyles = ReactDOMServer.renderToStaticMarkup(
  <div>
    <h1>H1 - Semibold 40px</h1>
    <h2>H2 - Semibold 30px</h2>
    <h3>H3 - Semibold 24px</h3>
    <h4>H4 - Semibold 20px</h4>
    <h5>H5 - Semibold 18px</h5>
    <p classname>Subtitle/Text button - Medium 14px</p>
    <p><a title="Links - Semibold 14px" href="/GO-UI-Library/">Links - Medium 14px</a></p>
    <p><a title="Links - Semibold 14px" href="/GO-UI-Library/">Links - Medium 14px</a></p>
    <p classname>Body/Text - Semibold 14px</p>
    <p classname>Body/Text - Medium 14px</p>
    <p classname>Body/Text - Regular 14px</p>
    <p classname>Body/Text - Light 14px</p>
    <p classname>Subtitle/Text - Medium 12px</p>
    <p classname>Subtitle/Text - Medium 12px</p>
  </div>
);

const TypographyPage = () => {
  return (
    <div className="inner">
      <div className="fold__header">
        <h1>TYPOGRAPHY</h1>
        <p>The following are the main colors used on the IFRC GO platform. When following this style, ensure the adherence to primary colors, avoiding using additional colors not in this palette.</p>
      </div>
      <br/><br/>

      <div className="fold__header">
        <div className="container-mid">
          <div className="fold__header__block">
            <h2 className="fold__title margin-reset">Typeface</h2>
          </div>
        </div>
      </div>

      <div className="fold fold__body">
        <div className="container-mid">
          <Tabs>
            <TabList>
              <Tab>Example</Tab>
              <Tab>Code</Tab>
            </TabList>

            <TabPanel>
              <div className="container-mid">
                <div className="fold">
                  <div className='poppins_40 font_weight_600'>Poppins</div>
                </div>
                <p>Used Weights</p>

                <p className='poppins_24 font_weight_600'>Poppins Semibold</p>
                <p className='poppins_24 font_weight_500'>Poppins Medium</p>
                <p className='poppins_24 font_weight_400'>Poppins Regular</p>
                <p className='poppins_24 font_weight_300'>Poppins Light</p>
              </div>
            </TabPanel>
            <TabPanel>
                <Code source={`${htmlString}`}/>
            </TabPanel>
          </Tabs>
        </div>
      </div>

      <div className="fold container-mid">
        <div className="container-mid">
          <h2 className="fold__title margin-reset">COMMENTS</h2>
          <br/>
          <p>The main typeface used is Poppins and can be used in 4 different weights, according to text hierarchy.</p>
        </div>
      </div>

      
      <div className="container-mid">
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
            <div className="container-mid">
            <br/>
              <h1 class="poppins_40">H1 - Semibold 40px</h1>

              <h2 class="poppins_30">H2 - Semibold 30px</h2>
            
              <h3 class="poppins_24">H3 - Semibold 24px</h3>
            
              <h4 class="poppins_20">H4 - Semibold 20px</h4>
            
              <h5 class="poppins_18">H5 - Semibold 18px</h5>
            
              <p className='typography medium'>Subtitle/Text button - Medium 14px</p>

              <p className='typography medium caps'>caps medium 14px</p>
            
              <p className='typography medium'><Link to="/" title="Links - Semibold 14px">
                  Links - Semibold 14px
              </Link></p>
            
              <p className='typography medium'><Link to="/" title="Links - Semibold 14px">
                  Links - Medium 14px
              </Link></p>
            
              <p className='typography medium bold'>Body/Text - Semibold 14px</p>
            
              <p className='typography medium'>Body/Text - Medium 14px</p>
            
              <p className='typography medium'>Body/Text - Regular 14px</p>
            
              <p className='typography medium'>Body/Text - Light 14px</p>

              <p className='typography medium12 bold'>Subtitle/Text - Medium 12px</p>

              <p className='typography medium12'>Subtitle/Text - Medium 12px</p>
            </div>
          </TabPanel>
          <TabPanel>
            <Code source={`${textStyles}`}/>
          </TabPanel>
        </Tabs>
      </div>
      
      <div className="fold container-mid">
        <div className="container-mid">
          <h2 className="fold__title margin-reset">COMMENTS</h2>
          <br/>
          <p>These are the main text styles and should be used to ensure consistency on the platform.</p>
        </div>
      </div>
    </div>
  );
};
export default TypographyPage;
