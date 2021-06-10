import React from "react"
import { Link } from "gatsby"
import CookieConsent from 'react-cookie-consent';

const Footer = ({}) => {
  return (
    <footer id="site-footer" role="contentinfo" className="header-footer-group">
      <CookieConsent
          enableDeclineButton
          disableStyles={true}
          containerClasses="cooConsent"
          contentClasses="cooConsentContent"
          buttonClasses="cooConsentButton"
          declineButtonClasses="cooConsentButtonDecline"
          location="bottom"
          buttonText="Decline"
          declineButtonText="Accept"
          cookieName="gatsby-gdpr-google-analytics">
          This site uses cookies to offer you a better experience. 
      </CookieConsent>
      <div className="section-inner">
        <div className="footer-credits">
          <p className="footer-copyright">
            © {new Date().getFullYear()}{" "}
            <Link to={"/"}>Gatsby Starter WordPress Twenty Twenty</Link>
          </p>
          <p>
            <a
              className="powered-by-wordpress"
              href="https://www.henrikwirth.com"
              rel="noreferrer noopener"
            >
              Proudly presented by Henrik Wirth
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
