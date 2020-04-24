import React from "react"
import {Link, useStaticQuery, graphql} from "gatsby"
import {normalizePath} from "../utils/normalize-path"
import UniversalLink from "./UniversalLink";

const Menu = () => {
    const {wpMenu} = useStaticQuery(graphql`
        {
            wpMenu(slug: { eq: "primary" }) {
                name
                menuItems {
                    nodes {
                        label
                        url
                        menuItemId
                        connectedObject {
                            ... on WpContentNode {
                                uri
                            }
                        }
                    }
                }
            }
        }
    `)

    return wpMenu?.menuItems?.nodes && (
        <nav className="primary-menu-wrapper" aria-label="Horizontal" role="navigation">

            <ul className="primary-menu reset-list-style">
                {
                    wpMenu.menuItems.nodes.map((menuItem, i) => {
                        const path = normalizePath(menuItem?.connectedObject?.uri ?? menuItem.url)
                        const itemId = "menu-item-" + menuItem.menuItemId

                        return (
                            <li id={itemId}
                                key={i + menuItem.url}
                                className={"menu-item menu-item-type-custom menu-item-object-custom menu-item-home" + itemId}>
                                <UniversalLink style={{display: `block`}} to={path} activeClassName={"current-menu-item current_page_item"}>
                                    {menuItem.label}
                                </UniversalLink>
                            </li>

                        )
                    })
                }
                {/*<li id="menu-item-61"*/}
                {/*    className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-61">*/}
                {/*    <a href="https://henrik-thesis-10.local/" aria-current="page">Home</a></li>*/}
                {/*<li id="menu-item-62"*/}
                {/*    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-62"><a*/}
                {/*    href="https://henrik-thesis-10.local/about/">About</a></li>*/}
                {/*<li id="menu-item-63"*/}
                {/*    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current_page_parent menu-item-63">*/}
                {/*    <a href="https://henrik-thesis-10.local/blog/">Blog</a></li>*/}
                {/*<li id="menu-item-64"*/}
                {/*    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-64"><a*/}
                {/*    href="https://henrik-thesis-10.local/contact/">Contact</a></li>*/}

            </ul>

        </nav>
    )
}

export default Menu
