import React from "react";
import {withRouter} from "react-router-dom";

function Footer(props) {
    const data = props.lineItems.col;
    const date = new Date();
    const year = date.getFullYear();
    // const copyright = props.lineItems.copyright;
    return (
        <footer className="page__footer" role="contentinfo">
            <div className="container-lg">
                {data ? (
                    <div className="footer-menu row flex-xs">
                        {data.map((item, i) => (
                            <div className="col col-6-xs col-3-mid">
                                <div className="footer-section-heading">
                                    <span className="">{item.name}</span>
                                </div>

                                {item.type === 'text' ? (
                                    <div className="base-font-medium">
                                      <span className="">
                                        {item.text}
                                      </span>
                                      <div className="footer-copyright">
                                          <span className="">© IFRC {year} {data.copyright}</span>
                                      </div>
                                    </div>
                                ) : null}

                                {item.type === 'list' ? (
                                    <div className="base-font-medium">
                                        {item.list.map((list, i) => (
                                            <span className="footer-section-link">
                                              <a href={list.link}> {/* github.com/remix-run/react-router/issues/1147#issuecomment-113180174 */}
                                                {list.name}
                                              </a>
                                          </span>
                                        ))}
                                    </div>
                                ) : null}

                                {item.type === 'social' ? (
                                    <div>
                                        <a
                                            href={item.social.link}
                                            className="button button--primary-filled button--small button-footer-contact"
                                        >
                                            {item.social.name}
                                        </a>
                                        <div className="footer-social-block">
                                        {item.list.map((list, i) => (
                                              <a
                                                  href={list.link}
                                                  className="footer-social-each"
                                                  target="_blank"
                                                  rel="noreferrer"
                                              >
                                                <span className={list.type}></span>
                                              </a>
                                        ))}
                                        </div>
                                    </div>
                                ) : null}
                            </div>
                        ))}
                    </div>

                ) : null}
            </div>
        </footer>
    );
}

export default withRouter(Footer);
