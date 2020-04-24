import React from "react"
import Header from "./Header"
import Footer from "./Footer"

import "../assets/style.css"
// import "../assets/style-rtl.css"
import "../assets/print.css"
import "../assets/style-theme.css"

import FooterMenusWidgets from "./FooterMenusWidgets"

const Layout = ({ children, bodyClass }) => (
  <div id={"GatsbyBody"} className={bodyClass}>
    <Header />

    <main id="site-content" role="main">
      {children}
    </main>

    <FooterMenusWidgets />

    <Footer />
  </div>
)

export default Layout
