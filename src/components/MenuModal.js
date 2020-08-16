import React from "react"
import CloseIcon from "../assets/svg/close.inline.svg"
import { graphql, useStaticQuery } from "gatsby"
import stopPropagation from "../utils/stop-propagation"
import UniversalLink from "./UniversalLink"
import SocialMenu from "./SocialMenu"

const MenuModal = ({ isActive, toggleBackdrop }) => {
  const { wpMenu } = useStaticQuery(graphql`
    {
      wpMenu(slug: { eq: "extended" }) {
        name
        menuItems {
          nodes {
            label
            url
            databaseId
            connectedNode {
              node {
                ... on WpContentNode {
                  uri
                } 
              }
            }
          }
        }
      }
    }
  `)

  if (!wpMenu?.menuItems?.nodes || wpMenu.menuItems.nodes === 0) return null

  return (
    <div
      className={
        "menu-modal cover-modal header-footer-group show-modal" +
        (isActive ? " active" : "")
      }
      data-modal-target-string=".menu-modal"
      onClick={(e) => toggleBackdrop(e, false)}
    >
      <div onClick={stopPropagation} className="menu-modal-inner modal-inner">
        <div className="menu-wrapper section-inner">
          <div className="menu-top">
            <button
              className="toggle close-nav-toggle fill-children-current-color"
              data-toggle-target=".menu-modal"
              data-toggle-body-class="showing-menu-modal"
              aria-expanded="false"
              data-set-focus=".menu-modal"
              onClick={(e) => toggleBackdrop(e, false)}
            >
              <span className="toggle-text">Close Menu</span>
              <CloseIcon />
            </button>

            <nav
              className="expanded-menu"
              aria-label="Expanded"
              role="navigation"
            >
              <ul className="modal-menu reset-list-style">
                {wpMenu.menuItems.nodes.map((menuItem, i) => {
                  const path = menuItem?.connectedNode?.node?.uri ?? menuItem.url

                  const itemId = "modal-menu-item-" + menuItem.databaseId

                  return (
                    <li
                      id={itemId}
                      key={itemId}
                      className={
                        "menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home " +
                        itemId
                      }
                    >
                      <div className="ancestor-wrapper">
                        <UniversalLink
                          to={path}
                          activeClassName={
                            "current-menu-item current_page_item"
                          }
                        >
                          {menuItem.label}
                        </UniversalLink>
                      </div>
                    </li>
                  )
                })}
              </ul>
            </nav>

            <nav className="mobile-menu" aria-label="Mobile" role="navigation">
              <ul className="modal-menu reset-list-style">
                {wpMenu.menuItems.nodes.map((menuItem, i) => {
                  const path = menuItem?.connectedNode?.node?.uri ?? menuItem.url

                  const itemId = "modal-mobile-menu-item-" + menuItem.databaseId

                  return (
                    <li
                      id={itemId}
                      key={itemId}
                      className={
                        "menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home " +
                        itemId
                      }
                    >
                      <div className="ancestor-wrapper">
                        <UniversalLink
                          to={path}
                          activeClassName={
                            "current-menu-item current_page_item"
                          }
                        >
                          {menuItem.label}
                        </UniversalLink>
                      </div>
                    </li>
                  )
                })}
              </ul>
            </nav>
          </div>

          <div className="menu-bottom">
            <SocialMenu isExpanded />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MenuModal
