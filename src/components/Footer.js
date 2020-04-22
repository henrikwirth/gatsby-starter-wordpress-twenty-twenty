import React from 'react';
import {Link} from "gatsby";
import moment from "moment";

const Footer = ({}) => {

    return (
        <footer id="site-footer" role="contentinfo" className="header-footer-group">

            <div className="section-inner">

                <div className="footer-credits">

                    <p className="footer-copyright">© {moment().format("YYYY")} <Link to={"/"}>Gatsby Starter WordPress Twenty Twenty</Link>
                    </p>{/* .footer-copyright -->*/}

                    <p>
                        <a className="powered-by-wordpress" href="https://www.henrikwirth.com" rel="noreferrer noopener">Proudly presented by Henrik Wirth</a>
                    </p>{/* .powered-by-wordpress -->*/}

                </div>
                {/* .footer-credits -->*/}

                <a  className="to-the-top" href="#site-header">
						<span className="to-the-top-long">
							To the top <span className="arrow"
                                             aria-hidden="true">↑</span>
						</span>
                    {/* .to-the-top-long -->*/}
                    <span className="to-the-top-short">
							Up <span className="arrow" aria-hidden="true">↑</span>
                    </span>
                    {/* .to-the-top-short -->*/}
                </a>{/* .to-the-top -->*/}

            </div>
            {/* .section-inner -->*/}

        </footer>
    );
};


export default Footer;
