import React from "react";
import {Link} from "react-router-dom";
import Button from "../../../components/button";
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
import Code from "../../../hoc/source-code";
import ReactDOMServer from "react-dom/server";
import LogoHorizontal from "../../../assets/graphics/content/Logo-Horizontal-RGB.png";
import LogoVertical from "../../../assets/graphics/content/Logo-vertical-RGB.png";

const BrandPage = () => {
  return (
    <div className="inner">
      <div className="fold__header">
        <h1>IFRC BRAND GUIDELINES</h1>
        <p>GO guidelines are largely based on IFRC brand guidelines with a few deviations due to how those are displayed on the GO platform. You may refer to IFRC guidelines in the document below.</p>
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
      </div>
      <br/><br/>

      <div className="fold__header">
        <div className="container-mid">
          <div className="fold__header__block">
            <h2 className="fold__title margin-reset">IFRC Logo</h2>
          </div>
        </div>
      </div>

      <div className="fold__body">
        <div className="container-mid">  
          <div className="box_space">
            <p>Horizontal Logo</p>
            <img src={LogoHorizontal} alt="text" className=""/>
          </div>
          <div className="box_space">
            <p>Vertical Logo</p>
            <img src={LogoVertical} alt="text" className=""/>
          </div>
        </div>
      </div>
      <br/>
      <div className="fold container-mid">
        <div className="container-mid">
          <h2 className="fold__title margin-reset">COMMENTS</h2>
          <br/>
          <p>IFRC logo helps to reframe the IFRC’s identity and positioning as a more dynamic and modern organisation. Also, updating and consolidating the IFRC’s branding guidelines and promoting them internally serves to bring greater coherence to the IFRC’s brand identity.</p>
        </div>
      </div>
    </div>
  );
};
export default BrandPage;
