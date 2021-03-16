import React from "react";
import ColourItem from "./colour";

export default function ColoursPage() {
  return (
    <React.Fragment>
    <div className="inner">
      <div className="fold__header">
        <div className="fold__header__block">
          <h2 className="fold__title margin-reset">Colours</h2>
        </div>
      </div>
      <div className="fold__body">
        <div className="container-full">
          <p>This page is an overview of the colours in our Go platform colour palette for digital purposes. Use it as a guide for the range and selection of colours you should include when you're creating visual collateral.</p>
          <div className="colours">
            <h3>Title here</h3>
            <p>Description here.</p>
            <div className="colour">
              <ColourItem
                class="brand"
                name="Brand"
                hex="#f5333f"
                rgb="rgb(245, 51, 63)"
              />
              <ColourItem
                class="complement"
                name="Complement"
                hex="#011e41"
                rgb="rgb(1, 30, 65)"
              />
              <ColourItem
                class="dark-grey"
                name="Dark Grey"
                hex="#323232"
                rgb="rgb(50, 50, 50)"
              />
            </div>
            <h3>Title here</h3>
            <p>Description here.</p>
            <div className="colour">
              <ColourItem
                class="positive"
                name="Positive"
                hex="#7fb845"
                rgb="rgb(127, 184, 69)"
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
    </div>
    </React.Fragment>
  );
}