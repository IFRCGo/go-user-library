import React from "react";

import LinkButton from "./../../components/link-button/";
import Link from "./../../components/link";
import HeroImage from "./../../assets/graphics/content/laptop.png";
import AmericanLogo from "./../../assets/graphics/content/arc_logo.png";
import BritishLogo from "./../../assets/graphics/content/brc_logo.png";
import JapaneseLogo from "./../../assets/graphics/content/jrc_logo.png";
import CanadianLogo from "./../../assets/graphics/content/crc_logo.png";
import DutchLogo from "./../../assets/graphics/content/nlrc_logo.jpg";
import SpanishLogo from "./../../assets/graphics/content/esp_logo.jpg";
import AustralianLogo from "./../../assets/graphics/content/aurc_logo.jpg";
import EricssonLogo from "./../../assets/graphics/content/ericsson_logo.png";

const GetStarted = () => {
  return (
    <React.Fragment>
      <div className="page--about">
        <section className="inpage">
          <div className="container-lg homepage">
            <div className="container-lg">
              <div className="homepage__body">
                <div className="row flex-xs">
                  <div className="col col-6-sm">
                    <h1>IFRC GO User Library</h1>
                    <p>
                      1This repository provides guidance and practical advice
                      for designers, developers and users adding data, graphics
                      and dashboards to GO. It includes the GO design
                      principles, visual guidelines, UI components, templates,
                      API guidance and other explanatory elements. The library
                      is open source, welcome to be used by anyone across the
                      IFRC network.
                    </p>
                    <div className="inner spacing-t">
                      <LinkButton
                        href="#link"
                        classSize="small"
                        classType="home-filled"
                        name="Learn More"
                      />
                      <br/><br/>
                    </div>
                  </div>
                  <div className="col col-6-sm">
                    <img src={HeroImage} alt="IFRC GO logo" width="330" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <section className="about__resources__block">
            <div className="container-lg">
              <h2>Get Started</h2>
              <div className="about__resources">
                <div className="about__resources__row row flex-mid">
                  <div className="col col-6-mid">
                    <div className="box__global box__global--resources">
                      <div className="box__global__heading">
                        <div className="base-font-semi-bold">
                          Brand & Design Guidelines
                        </div>
                      </div>
                      <div className="box__global__content">
                        <p>
                          Here you can find visual guidelines for IFRC and the
                          GO platform, including design building blocks, such as
                          colors, typography, logo, icons, and others.
                        </p>
                        <br/><br/>
                        <Link
                          href="#link"
                          icon="chevron-right"
                          class="link--with-icon"
                          name="Explore the Brand & Design Guidelines section"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col col-6-mid">
                    <div className="box__global box__global--resources">
                      <div className="box__global__heading">
                        <div className="base-font-semi-bold">Ui Components</div>
                      </div>
                      <div className="box__global__content">
                        <p>
                          This section outlines the specific UI components (such
                          as headers, navigation, forms, and others) that form
                          IFRC GO. Each component includes design and
                          development specifications.
                        </p>
                        <br/><br/>
                        <Link
                          href="#link"
                          icon="chevron-right"
                          class="link--with-icon"
                          name="Explore the UI Components section"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="about__resources__row row flex-mid">
                  <div className="col col-6-mid">
                    <div className="box__global box__global--resources">
                      <div className="box__global__heading">
                        <div className="base-font-semi-bold">
                          Data Visualisations
                        </div>
                      </div>
                      <div className="box__global__content">
                        <p>Access the guidelines for maps and infographics across the platform. Here you can also discover the guidance on how to use the GO API.</p>
                        <br/><br/>
                        <Link
                          href="#link"
                          icon="chevron-right"
                          class="link--with-icon"
                          name="Explore the Data Viz section"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col col-6-mid">
                    <div className="box__global box__global--resources">
                      <div className="box__global__heading">
                        <div className="base-font-semi-bold">Templates</div>
                      </div>
                      <div className="box__global__content">
                        <p>Download various IFRC templates in use for emergency operations such as reports, presentations, and others.</p>
                        <br/><br/>
                        <Link
                          href="#link"
                          icon="chevron-right"
                          class="link--with-icon"
                          name="Explore the Templates section"
                        />
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
        <div className="fold container-mid text-center">
          <p className="logo__title">
            If you have a suggestion or question, please contact:
          </p>
          <LinkButton
            href="mailto:im@ifrc.org"
            classSize="small"
            classType="primary-filled"
            name="im@ifrc.org"
          />
        </div>
      </div>
    </React.Fragment>
  );
};
export default GetStarted;