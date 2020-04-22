import React from 'react';
import SocialMenu from "./Social-Menu";

const FooterMenusWidgets = ({}) => {
    return (
        <div className="footer-nav-widgets-wrapper header-footer-group">

            <div className="footer-inner section-inner">

                <div className="footer-top has-social-menu">

                    <SocialMenu />

                </div>
                {/* .footer-top */}


                <aside className="footer-widgets-outer-wrapper" role="complementary">

                    <div className="footer-widgets-wrapper">


                        <div className="footer-widgets column-one grid-item">
                            <div className="widget widget_text">
                                <div className="widget-content"><h2
                                    className="widget-title subheading heading-size-3">About This Site</h2>
                                    <div className="textwidget">
                                        <p>
                                            This is a port from the php-based WordPress Twenty Twenty theme to a Gatsby theme.
                                            It works already uses the new <a href="https://github.com/TylerBarnes/using-gatsby-source-wordpress-experimental" target="_blank" rel="noreferrer noopener">gatsby-wordpress-source plugin</a> that has been developed by <a href={"https://github.com/TylerBarnes"} target={"_blank"}>@TylorBarnes</a>
                                        </p>

                                        <p>
                                            Furthermore, I used this site for a thesis, which compares overall performance between a php-based WordPress theme and a static Gatsby site. Check it out <a href="https://www.henrikwirth.com" target="_blank" rel="noreferrer noopener">here</a>.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="footer-widgets column-two grid-item">
                            <div className="widget widget_text">
                                <div className="widget-content">
                                    <h2 className="widget-title subheading heading-size-3">Find Us</h2>
                                    <div className="textwidget">
                                        <p><strong>NeverNull GmbH</strong><br/>
                                            <a>www.nevernull.io</a></p>
                                        <p><strong>We do a lot of things</strong><br/>
                                            Besides web-development, we also develop<br/>the cross platform app framework <a href="https://www.mobileui.dev">www.mobileui.dev</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                    {/* .footer-widgets-wrapper */}

                </aside>
                {/* .footer-widgets-outer-wrapper */}


            </div>
            {/* .footer-inner */}

        </div>
    )
}


export default FooterMenusWidgets
