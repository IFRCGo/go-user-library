import React from "react";

import LinkButton from "./../components/link-button";

import HeroImage from "./../assets/graphics/content/per_approach_notext.png";
import AmericanLogo from "./../assets/graphics/content/arc_logo.png";
import BritishLogo from "./../assets/graphics/content/brc_logo.png";
import JapaneseLogo from "./../assets/graphics/content/jrc_logo.png";
import CanadianLogo from "./../assets/graphics/content/crc_logo.png";
import DutchLogo from "./../assets/graphics/content/nlrc_logo.jpg";
import SpanishLogo from "./../assets/graphics/content/esp_logo.jpg";
import AustralianLogo from "./../assets/graphics/content/aurc_logo.jpg";
import EricssonLogo from "./../assets/graphics/content/ericsson_logo.png";

const Home = () => {
  return (
    <React.Fragment>
      <div className="page--about">
        <section className="inpage">
          <div className="homepage">
            <div className="container-lg">
              <div className="homepage__body">
                <div className="row flex-xs">
                  <div className="col col-6-xs">
                    <h1> IFRC GO Design System</h1>
                    <p>
                      Text explaining the motivation of creating this library,
                      who can benefit from it, etc. Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit. Morbi imperdiet leo vel nunc
                      iaculis fermentum eget quis tortor. Vestibulum facilisis
                      volutpat blandit. Aliquam ultrices malesuada ex ut
                      pretium. Maecenas dui ipsum, euismod euismod lorem non,
                      imperdiet ullamcorper libero.
                    </p>
                    <div className="inner spacing-t">
                      <LinkButton
                        href="#link"
                        classSize="small"
                        classType="home-filled"
                        name="Learn More"
                      />
                    </div>
                  </div>
                  <div className="col col-6-xs">
                    <img src={HeroImage} alt="IFRC GO logo" width="330" />
                  </div>
                </div>
              </div>
            </div>
          </div>
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
                        <div className="base-font-semi-bold">Ui Components</div>
                      </div>
                      <div className="box__global__content">
                        <p>content</p>
                      </div>
                    </div>
                  </div>

                  <div className="col col-4-mid">
                    <div className="box__global box__global--resources">
                      <div className="box__global__heading">
                        <div className="base-font-semi-bold">Data Viz</div>
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
              <p className="logo__title text-center">
                <span className="">
                  GO has received dedicated personnel and funding support from:
                </span>
              </p>
              <ul className="logo__list row-lg flex-sm">
                <li className="logo__item col-lg col-6-xs col-4-sm col-3-mid">
                  <a
                    href="http://www.redcross.org/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src={AmericanLogo}
                      alt="Visit American Red Cross Page"
                      width="160"
                    />
                  </a>
                </li>
                <li className="logo__item col-lg col-6-xs col-4-sm col-3-mid">
                  <a
                    href="http://www.redcross.org.uk/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src={BritishLogo}
                      alt="Visit British Red Cross Page"
                      width="170"
                    />
                  </a>
                </li>
                <li className="logo__item col-lg col-6-xs col-4-sm col-3-mid">
                  <a
                    href="http://www.jrc.or.jp/english/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src={JapaneseLogo}
                      alt="Visit Japanese Red Cross Page"
                      width="154"
                    />
                  </a>
                </li>
                <li className="logo__item col-lg col-6-xs col-4-sm col-3-mid">
                  <a
                    href="http://www.redcross.ca/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src={CanadianLogo}
                      alt="Visit Canadian Red Cross Page"
                      width="120"
                    />
                  </a>
                </li>
                <li className="logo__item col-lg col-6-xs col-4-sm col-3-mid">
                  <a
                    href="https://www.rodekruis.nl/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src={DutchLogo}
                      alt="Visit Netherlands Red Cross Page"
                      width="160"
                    />
                  </a>
                </li>
                <li className="logo__item col-lg col-6-xs col-4-sm col-3-mid">
                  <a
                    href="https://www.cruzroja.es/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src={SpanishLogo}
                      alt="Visit Spanish Red Cross Page"
                      width="180"
                    />
                  </a>
                </li>
                <li className="logo__item col-lg col-6-xs col-4-sm col-3-mid">
                  <a
                    href="https://www.redcross.org.au/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src={AustralianLogo}
                      alt="Visit Australian Red Cross Page"
                      width="200"
                    />
                  </a>
                </li>
                <li className="logo__item col-lg col-6-xs col-4-sm col-3-mid">
                  <a
                    href="https://www.ericsson.com/en"
                    target="_blank"
                    rel="noreferrer"
                  >
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
        </section>
      </div>
    </React.Fragment>
  );
};
export default Home;
