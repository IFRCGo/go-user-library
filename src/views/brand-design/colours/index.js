import React from "react";
import ColourItem from "./colour";

export default function ColoursPage() {
  return (
    <React.Fragment>
    <div className="inner">
      <div className="fold__header">
        <h1>Colours</h1>
        <p>The following are the main colors used on the IFRC GO platform. When following this style, ensure the adherence to primary colors, avoiding using additional colors not in this palette.</p>
      </div>
      <div className="fold__header">
        <div className="fold__header__block">
          <h2 className="fold__title margin-reset">Primary</h2>
        </div>
      </div>
      <div className="fold__body">
        <div className="container-full">
          <div className="colours">
            <div className="colour">
              <ColourItem
                class="brand"
                name="Red"
                hex="#f5333f"
                rgb="rgb(245, 51, 63)"
              />
              <ColourItem
                class="complement"
                name="Blue"
                hex="#011e41"
                rgb="rgb(1, 30, 65)"
              />
              <ColourItem
                class="dark-grey"
                name="Dark Grey"
                hex="#323232"
                rgb="rgb(50, 50, 50)"
              />
              <ColourItem
                class="white"
                name="White"
                hex="#ffffff"
                rgb="rgb(255, 255, 255)"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container-full">
        <h2 className="fold__title margin-reset">Primary Colour Guidelines</h2>
        <br /><p>The main colors used on the platform are the primary colors, following IFRC guidelines.</p>
      </div>
      <br /><br /><br />
      <div className="fold__header">
        <div className="fold__header__block">
          <h2 className="fold__title margin-reset">Semantic</h2>
        </div>
      </div>
      <div className="fold__body">
        <div className="container-full">
          <div className="colours">
            <div className="colour">
              <ColourItem
                class="positive"
                name="Positive"
                hex="#7fb845"
                rgb="rgb(127, 184, 69)"
              />
              <ColourItem
                class="informational"
                name="Informational"
                hex="#3FA2F7"
                rgb="rgb(63, 162, 247)"
              />
              <ColourItem
                class="negative"
                name="Negative"
                hex="#f75c65"
                rgb="rgb(247, 92, 101)"
              />
              <ColourItem
                class="warning"
                name="Warning"
                hex="#ffb443"
                rgb="rgb(255, 180, 67)"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container-full">
        <h2 className="fold__title margin-reset">Semantic Colour Guidelines</h2>
        <br /><p>The semantic colors are for highlighting specific information, such as alerts, error messaging, confirmations, and others.</p>
      </div>
      <br /><br /><br />
      <div className="fold__header">
        <div className="fold__header__block">
          <h2 className="fold__title margin-reset">Greyscale</h2>
        </div>
      </div>
      <div className="fold__body">
        <div className="container-full">
          <div className="colours">
            <div className="colour">
              <ColourItem
                class="black"
                name="Black"
                hex="#000000"
                rgb="rgb(0, 0, 0)"
              />
              <ColourItem
                class="grey9"
                name="Grey"
                hex="#323232"
                rgb="rgb(50, 50, 50)"
              />
              <ColourItem
                class="grey8"
                name="Grey"
                hex="#525252"
                rgb="rgb(82, 82, 82)"
              />
              <ColourItem
                class="grey7"
                name="Grey"
                hex="#6F6F6F"
                rgb="rgb(111, 111, 111)"
              />
              <ColourItem
                class="grey6"
                name="Grey"
                hex="#8D8D8D"
                rgb="rgb(141, 141, 141)"
              />
            </div>
            <div className="colour">
              <ColourItem
                class="grey5"
                name="Grey"
                hex="#A8A8A8"
                rgb="rgb(168, 168, 168)"
              />
              <ColourItem
                class="grey4"
                name="Grey"
                hex="#C6C6C6"
                rgb="rgb(198, 198, 198)"
              />
              <ColourItem
                class="grey3"
                name="Grey"
                hex="#E0E0E0"
                rgb="rgb(224, 224, 224)"
              />
              <ColourItem
                class="grey2"
                name="Grey"
                hex="#F4F4F4"
                rgb="rgb(244, 244, 244)"
              />
              <ColourItem
                class="grey1"
                name="Grey"
                hex="#FAFAFA"
                rgb="rgb(250, 250, 250)"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container-full">
        <h2 className="fold__title margin-reset">Greyscale Colour Guidelines</h2>
        <br /><p>Placeholder text.</p>
      </div>
    </div>
    </React.Fragment>
  );
}