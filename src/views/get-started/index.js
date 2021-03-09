import React from "react";

import AmericanLogo from "./../../assets/graphics/content/arc_logo.png";
import BritishLogo from "./../../assets/graphics/content/brc_logo.png";
import JapaneseLogo from "./../../assets/graphics/content/jrc_logo.png";
import CanadianLogo from "./../../assets/graphics/content/crc_logo.png";
import DutchLogo from "./../../assets/graphics/content/nlrc_logo.jpg";
import SpanishLogo from "./../../assets/graphics/content/esp_logo.jpg";
import AustralianLogo from "./../../assets/graphics/content/aurc_logo.jpg";
import EricssonLogo from "./../../assets/graphics/content/ericsson_logo.png";

const Home = () => {
  
  return (
    <React.Fragment>

      <div className="page--homepage">
        <section className="inpage">
          <header className="inpage__header">
            <div className="">
              <div className="inpage__headline">
                <h1 className="inpage__title inpage__title--home container-lg">
                  IFRC GO Design System
                </h1>
                <div className="inpage__introduction container-xs">
                  A complete guide to the design rpinciples and guidelines that
                  make IFRC GO possible. The library is open source, welcom to
                  be used by any IFRC teams.
                </div>
              </div>
            </div>
          </header>
          <div className="inpage__body">
            <section className="about__resources__block">
              <div className="container-lg">
                <div className="text-center">
                  <div className="line-brand-deco-border-top-wrap">
                    <div className="line-brand-deco-border-top"></div>
                    <h2 className="fold__title text-center">Title</h2>
                  </div>
                </div>
                <div className="about__resources">
                  <div className="about__resources__row row flex-mid">
                    <div className="col col-4-mid">
                      <div className="box__global box__global--resources">
                        <div className="box__global__heading">
                          <div className="base-font-semi-bold">
                            Brand & Design Guidelines
                          </div>
                        </div>
                        <div className="box__global__content">
                          <p>text here</p>
                        </div>
                      </div>
                    </div>
                    <div className="col col-4-mid">
                      <div className="box__global box__global--resources">
                        <div className="box__global__heading">
                          <div className="base-font-semi-bold">
                            Ui Components
                          </div>
                        </div>
                        <div className="box__global__content">
                          <p>content</p>
                        </div>
                      </div>
                    </div>

                    <div className="col col-4-mid">
                      <div className="box__global box__global--resources">
                        <div className="box__global__heading">
                          <div className="base-font-semi-bold">Content</div>
                        </div>
                        <div className="box__global__content">
                          <p>content</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="logo__group">
              <div className="container-mid">
                <p className="logo__title text-center"></p>
                <ul className="logo__list row-lg flex-sm">
                  <li className="logo__item col-lg col-6-xs col-4-sm col-3-mid">
                    <a href="http://www.redcross.org/" target="_blank" rel="noreferrer">
                      <img
                        src={AmericanLogo}
                        alt="Visit American Red Cross Page"
                        width="160"
                      />
                    </a>
                  </li>
                  <li className="logo__item col-lg col-6-xs col-4-sm col-3-mid">
                    <a href="http://www.redcross.org.uk/" target="_blank" rel="noreferrer">
                      <img
                        src={BritishLogo}
                        alt="Visit British Red Cross Page"
                        width="170"
                      />
                    </a>
                  </li>
                  <li className="logo__item col-lg col-6-xs col-4-sm col-3-mid">
                    <a href="http://www.jrc.or.jp/english/" target="_blank" rel="noreferrer">
                      <img
                        src={JapaneseLogo}
                        alt="Visit Japanese Red Cross Page"
                        width="154"
                      />
                    </a>
                  </li>
                  <li className="logo__item col-lg col-6-xs col-4-sm col-3-mid">
                    <a href="http://www.redcross.ca/" target="_blank" rel="noreferrer">
                      <img
                        src={CanadianLogo}
                        alt="Visit Canadian Red Cross Page"
                        width="120"
                      />
                    </a>
                  </li>
                  <li className="logo__item col-lg col-6-xs col-4-sm col-3-mid">
                    <a href="https://www.rodekruis.nl/" target="_blank" rel="noreferrer">
                      <img
                        src={DutchLogo}
                        alt="Visit Netherlands Red Cross Page"
                        width="160"
                      />
                    </a>
                  </li>
                  <li className="logo__item col-lg col-6-xs col-4-sm col-3-mid">
                    <a href="https://www.cruzroja.es/" target="_blank" rel="noreferrer">
                      <img
                        src={SpanishLogo}
                        alt="Visit Spanish Red Cross Page"
                        width="180"
                      />
                    </a>
                  </li>
                  <li className="logo__item col-lg col-6-xs col-4-sm col-3-mid">
                    <a href="https://www.redcross.org.au/" target="_blank" rel="noreferrer">
                      <img
                        src={AustralianLogo}
                        alt="Visit Australian Red Cross Page"
                        width="200"
                      />
                    </a>
                  </li>
                  <li className="logo__item col-lg col-6-xs col-4-sm col-3-mid">
                    <a href="https://www.ericsson.com/en" target="_blank" rel="noreferrer">
                      <img
                        src={EricssonLogo}
                        alt="Visit Ericsson Page"
                        width="140"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
}
export default Home;
