import React, { useState } from "react"
import Header from "./Header"
import Footer from "./Footer"
import theme from '../../config/theme'

import FooterMenusWidgets from "./FooterMenusWidgets"
import MenuModal from "./MenuModal"
import "@wordpress/block-library/build-style/style.css"

const backdropClasses = " backdrop"

const Layout = ({ children, bodyClass }) => {
  const [backdropActive, setBackdropActive] = useState(false)

  const toggleBackdrop = (e, active) => {
    e.preventDefault()
    setBackdropActive(active)
  }

  return (
    <div
      id={"GatsbyBody"}
      className={
        bodyClass +
        " showing-menu-modal showing-modal" +
        (backdropActive ? backdropClasses : "")
      }
    >
      <Header toggleBackdrop={toggleBackdrop} />

      <MenuModal isActive={backdropActive} toggleBackdrop={toggleBackdrop} />

      <main id="site-content" role="main">
        {children}
      </main>

      <FooterMenusWidgets />

      <Footer />
    </div>
  )
}

export default Layout
