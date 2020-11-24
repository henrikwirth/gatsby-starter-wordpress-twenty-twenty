import React from "react"
import { Link } from "gatsby"

const config = require('../../config/site')

const Footer = ({}) => {
  return (
    <footer id="site-footer" role="contentinfo" className="header-footer-group">
      <div className="section-inner">
        <div className="footer-credits">
          <p className="footer-copyright">
            © {new Date().getFullYear()}{" "}
            <Link to={"/"}>{config.company}</Link>
          </p>
          <p className="powered-by-wordpress">
            Made with &hearts; and{" "}
            <a
              className=""
              href="https://www.gatsbyjs.com/"
              rel="noreferrer noopener"
            >
               Gatsby.js
            </a>
          </p>
        </div>

        <a className="to-the-top" href="#site-header">
          <span className="to-the-top-long">
            To the top{" "}
            <span className="arrow" aria-hidden="true">
              ↑
            </span>
          </span>
          <span className="to-the-top-short">
            Up{" "}
            <span className="arrow" aria-hidden="true">
              ↑
            </span>
          </span>
        </a>
      </div>
    </footer>
  )
}

export default Footer
