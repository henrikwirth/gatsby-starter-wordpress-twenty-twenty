import React from "react"
import SocialMenu from "./SocialMenu"

const FooterMenusWidgets = ({}) => {
  return (
    <div className="footer-nav-widgets-wrapper header-footer-group">
      <div className="footer-inner section-inner">
        <div className="footer-top has-social-menu">
          <SocialMenu />
        </div>

        <aside className="footer-widgets-outer-wrapper" role="complementary">
          <div className="footer-widgets-wrapper">
            <div className="footer-widgets column-one grid-item">
              <div className="widget widget_text">
                <div className="widget-content">
                  <h2 className="widget-title subheading heading-size-3">
                    About This Site
                  </h2>
                  <div className="textwidget">
                    <p>
                      This is a port from the php-based WordPress Twenty Twenty
                      theme to a Gatsby theme. It works uses the new{" "}
                      <a
                        href="https://github.com/TylerBarnes/using-gatsby-source-wordpress-experimental"
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        gatsby-wordpress-source plugin
                      </a>{" "}
                      that has been developed by{" "}
                      <a
                        href={"https://github.com/TylerBarnes"}
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        @TylerBarnes
                      </a>
                    </p>

                    <p>
                      Furthermore, I am using this site for a thesis, which
                      compares overall performance between a php-based WordPress
                      theme and a static Gatsby site. I'll publish it on my site
                      once it is done:{" "}
                      <a
                        href="https://www.henrikwirth.com"
                        target="_blank"
                        rel="noreferrer noopener"
                        title="www.henrikwirth.com"
                      >
                        henrikwirth.com
                      </a>
                      .
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="footer-widgets column-two grid-item">
              <div className="widget widget_text">
                <div className="widget-content">
                  <h2 className="widget-title subheading heading-size-3">
                    Find Us
                  </h2>
                  <div className="textwidget">
                    <p>
                      <strong>NeverNull GmbH</strong>
                      <br />
                      <a
                        href="https://www.nevernull.io"
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        www.nevernull.io
                      </a>
                    </p>
                    <p>
                      <strong>We do a lot of things</strong>
                      <br />
                      Besides web-development, we also develop
                      <br />
                      the cross platform app framework{" "}
                      <a
                        href="https://www.mobileui.dev"
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        www.mobileui.dev
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}

export default FooterMenusWidgets
