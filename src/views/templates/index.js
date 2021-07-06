import React from "react";

import AmericanLogo from "./../../assets/graphics/content/arc_logo.png";
import BritishLogo from "./../../assets/graphics/content/brc_logo.png";
import JapaneseLogo from "./../../assets/graphics/content/jrc_logo.png";
import CanadianLogo from "./../../assets/graphics/content/crc_logo.png";
import DutchLogo from "./../../assets/graphics/content/nlrc_logo.jpg";
import SpanishLogo from "./../../assets/graphics/content/esp_logo.jpg";
import AustralianLogo from "./../../assets/graphics/content/aurc_logo.jpg";
import EricssonLogo from "./../../assets/graphics/content/ericsson_logo.png";

const Templates = () => {
  return (
    <div className="page--homepage">
      <section className="inpage">
        <header className="inpage__header">
          <div className="">
            <div className="inpage__headline">
              <h1 className="inpage__title inpage__title--home container-lg">
                Templates
              </h1>
            </div>
          </div>
        </header>

        <div className="inpage__body">
          <br/>
          <div className="container-mid">
            <div>
              <div className="fold__header__block">
                <h2 className="fold__title margin-reset">Power BI and Tableau Colour Templates</h2>
              </div>
            </div><br/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi imperdiet leo vel nunc iaculis fermentum eget quis tortor.</p>
          </div>

          <section className="about__resources__block">
            <div className="container-mid">
              <div className="about__resources">
                <div className="about__resources__row row flex-mid">
                  
                  <div className="col col-6-mid">
                    <div className="box__global box__global--resources">
                      <div className="box__global__heading">
                        <div className="base-font-semi-bold">
                          Power BI Template - text 
                        </div>
                      </div>
                      <div className="box__global__content">
                        <p>
                          Here you can find visual guidelines for IFRC and the
                          GO platform, including design building blocks, such as
                          colors, typography, logo, icons, and others.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col col-6-mid">
                    <div className="box__global box__global--resources">
                      <div className="box__global__heading">
                        <div className="base-font-semi-bold">
                          Tableau Template - text
                        </div>
                      </div>
                      <div className="box__global__content">
                        <p>
                          This section outlines the specific UI components (such
                          as headers, navigation, forms, and others) that form
                          IFRC GO. Each component includes design and
                          development specifications.
                        </p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </section>

          <div className="container-mid">
            <div>
              <div className="fold__header__block">
                <h2 className="fold__title margin-reset">Emergency Response Dashboard Template (Power BI)</h2>
              </div>
            </div>
            <br/>
            <p>A dashboard to show the key elements of an Emergency operation. The dashboard includes the following sections and content: </p>
            <br/>
            <p class="poppins_16 font_weight_500">Section 1:</p>
            <p>Overview tab with</p>
            <ol className="container-mid">
              <li>Situation overview</li>
              <li>Key figures (people affected, appeal amount and funding received) </li>
              <li>Map of affected areas</li>
            </ol>

            <p class="poppins_16 font_weight_500">Section 2:</p>
            <p>3W of RCRC NS supporting the emergency response, showing number of activities by sector and number of activities by RCRC actors. </p>

            <p class="poppins_16 font_weight_500">Section 3:</p>
            <p>HAC data - desegregated figures of number of people affected, figures on impact of the disaster.</p>

            <p class="poppins_16 font_weight_500">Section 4:</p>
            <p>Funding</p>
            <ol className="container-mid">
              <li>Total funding desegregated by Soft, Hard Pledges and Bilateral support.</li>
              <li>Funding by donors.</li>
            </ol>

            <p class="poppins_16 font_weight_500">Section 5:</p>
            <p>Aid distribution tracker (items distributed by distributions site), target HH by geographical area.</p>

            <p class="poppins_16 font_weight_500">Section 6:</p>
            <p>SDR (Secondary Data Review) tab</p>

            <div className="fold">
              <div className="fold__header">
                <div className="fold__header__block">
                  <h2 className="fold__title margin-reset">Presentations</h2>
                </div>              
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi imperdiet leo vel nunc iaculis fermentum eget quis tortor. </p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};
export default Templates;