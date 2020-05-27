import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import Menu from "./Menu"
import ToggleIcon from "../assets/svg/toggle.inline.svg"

const Header = ({ pageContext, toggleBackdrop, ...props }) => {
  const { wp } = useStaticQuery(graphql`
    {
      wp {
        generalSettings {
          title
          description
        }
      }
    }
  `)
  return (
    <header id="site-header" className="header-footer-group" role="banner">
      <div className="header-inner section-inner">
        <div className="header-titles-wrapper">
          <div className="header-titles">
            <h1 className="site-title">
              <Link
                to="/"
                dangerouslySetInnerHTML={{ __html: wp.generalSettings.title }}
              />
            </h1>
            <div
              className="site-description"
              dangerouslySetInnerHTML={{
                __html: wp.generalSettings.description,
              }}
            />
          </div>

          <button
            className="toggle nav-toggle mobile-nav-toggle"
            data-toggle-target=".menu-modal"
            data-toggle-body-class="showing-menu-modal"
            aria-expanded="false"
            data-set-focus=".close-nav-toggle"
            onClick={(e) => toggleBackdrop(e, true)}
          >
            <span className="toggle-inner">
              <span className="toggle-icon">
                <ToggleIcon />
              </span>
              <span className="toggle-text">Menu</span>
            </span>
          </button>
        </div>

        <div className="header-navigation-wrapper">
          <Menu />

          <div className="header-toggles hide-no-js">
            <div className="toggle-wrapper nav-toggle-wrapper has-expanded-menu">
              <button
                className="toggle nav-toggle desktop-nav-toggle"
                data-toggle-target=".menu-modal"
                data-toggle-body-class="showing-menu-modal"
                aria-expanded="false"
                data-set-focus=".close-nav-toggle"
                onClick={(e) => toggleBackdrop(e, true)}
              >
                <span className="toggle-inner">
                  <span className="toggle-text">Menu</span>
                  <span className="toggle-icon">
                    <ToggleIcon />
                  </span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
