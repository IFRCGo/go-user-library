import React from "react";

const Footer = () => {
  return (
    <footer className="page__footer" role="contentinfo">
      <div className="container-lg">
        <div className="footer-menu row flex-xs">



          <div className="col col-6-xs col-3-mid">
            <div className="footer-section-heading">
              <span className="">About Go</span>
            </div>
            <div className="base-font-medium">
              <span className="">
                IFRC GO is a Red Cross Red Crescent platform to connect
                information on emergency needs with the right response.
              </span>
            </div>
            <div className="footer-copyright footer-copyright--lg">
              <span className="">© IFRC 2020</span>
            </div>
          </div>

          <div className="col col-6-xs col-3-mid">
            <div className="footer-section-heading">
              <span className="">Find out more</span>
            </div>
            <a
              href="https://ifrc.org"
              className="footer-section-link"
              target="_blank"
              rel="noreferrer"
            >
              ifrc.org
            </a>
            <a
              href="https://rcrcsims.org"
              className="footer-section-link"
              target="_blank"
              rel="noreferrer"
            >
              rcrcsims.org
            </a>
            <a
              href="https://data.ifrc.org"
              className="footer-section-link"
              target="_blank"
              rel="noreferrer"
            >
              data.ifrc.org
            </a>
          </div>

          <div className="col col-6-xs col-3-mid">
            <div className="footer-section-heading">
              <span className="">Helpful links</span>
            </div>
            <div className="footer-section-link">
              <a
                href="https://github.com/ifrcgo/go-frontend"
                title="Open Source Code"
                target="_blank"
                rel="noreferrer"
              >
                <span className="">Open Source Code</span>
              </a>
            </div>
            <a
              href="https://dscgocdnapi.azureedge.net/docs"
              title="API Documentation"
              className="footer-section-link"
              target="_blank"
              rel="noreferrer"
            >
              <span className="">API Documentation</span>
            </a>
            <a href="/about" className="footer-section-link">
              <span className="">Other Resources</span>
            </a>
          </div>

          <div className="col col-6-xs col-3-mid">
            <div className="footer-section-heading">
              <span className="">Contact Us</span>
            </div>
            <a
              href="mailto:im@ifrc.org"
              className="button button--primary-filled button--small button-footer-contact"
            >
              im@ifrc.org
            </a>
            <div className="footer-social-block">
              <a
                href="https://ifrcgoproject.medium.com"
                className="footer-social-each"
                target="_blank"
                rel="noreferrer"
              >
                <span className="f-icon-medium footer-social-icon"></span>
              </a>
              <a
                href="https://www.facebook.com/IFRC"
                className="footer-social-each"
                target="_blank"
                rel="noreferrer"
              >
                <span className="f-icon-facebook footer-social-icon"></span>
              </a>
              <a
                href="https://twitter.com/ifrcgo"
                className="footer-social-each"
                target="_blank"
                rel="noreferrer"
              >
                <span className="f-icon-twitter footer-social-icon"></span>
              </a>
              <a
                href="https://www.youtube.com/watch?v=dwPsQzla9A4"
                className="footer-social-each"
                target="_blank"
                rel="noreferrer"
              >
                <span className="f-icon-youtube footer-social-icon"></span>
              </a>
            </div>
            <div className="footer-copyright footer-copyright--sm">
              <span className="">© IFRC 2020</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
