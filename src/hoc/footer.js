import React from "react";
import {Link, NavLink, withRouter} from "react-router-dom";
import {ListData} from "../utils/list";
import Logo from "../assets/graphics/layout/go-logo-2020.svg";

function Footer(props) {
    const data = props.lineItems.col;
    const copyright = props.lineItems.copyright;
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
                                    </div>
                                ) : null}

                                {item.type === 'list' ? (
                                    <div className="base-font-medium">
                                        {item.list.map((list, i) => (
                                            <span className="">
                                              <Link
                                                  to={list.link}
                                                  title={list.name}
                                                  className="footer-section-link">
                                                    {list.name}
                                                </Link>
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
                <div className="footer-menu row flex-xs">
                    <div className="footer-copyright">
                        <span className="">© IFRC 2020 {data.copyright}</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default withRouter(Footer);
