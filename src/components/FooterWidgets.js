import React from "react"
import SocialMenu from "./SocialMenu"
import FooterMenu1 from "./FooterMenu1"
import FooterMenu2 from "./FooterMenu2"
import FooterMenu3 from "./FooterMenu3"
import FooterMenu4 from "./FooterMenu4"
import FooterMenu5 from "./FooterMenu5"

const FooterWidgets = () => {
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
                  <h4>Footer Menu 1</h4>
                  <FooterMenu1 />
                </div>
              </div>
            </div>

            <div className="footer-widgets column-two grid-item">
              <div className="widget widget_text">
                <div className="widget-content">
                  <h4>Footer Menu 2</h4>
                  <FooterMenu2 />
                </div>
              </div>
            </div>

            <div className="footer-widgets column-three grid-item">
              <div className="widget widget_text">
                <div className="widget-content">
                  <h4>Footer Menu 3</h4>
                  <FooterMenu3 />
                </div>
              </div>
            </div>

            <div className="footer-widgets column-four grid-item">
              <div className="widget widget_text">
                <div className="widget-content">
                  <h4>Footer Menu 4</h4>
                  <FooterMenu4 />
                </div>
              </div>
            </div>

            <div className="footer-widgets column-five grid-item">
              <div className="widget widget_text">
                <div className="widget-content">
                  <h4>Footer Menu 5</h4>
                  <FooterMenu5 />
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}

export default FooterWidgets
