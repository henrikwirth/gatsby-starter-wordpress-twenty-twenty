import React from "react"
import {graphql, Link, useStaticQuery} from "gatsby"
import Menu from "./Menu";

const Header = ({pageContext, ...props}) => {
    const {wp} = useStaticQuery(graphql`
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
                        <h1 className="site-title"><Link to="/">{wp.generalSettings.title}</Link></h1>
                        <div className="site-description">{wp.generalSettings.description}</div>
                        {/* .site-description */}
                    </div>
                    {/* .header-titles */}

                    <button className="toggle nav-toggle mobile-nav-toggle" data-toggle-target=".menu-modal"
                            data-toggle-body-class="showing-menu-modal" aria-expanded="false"
                            data-set-focus=".close-nav-toggle">
						<span className="toggle-inner">
							<span className="toggle-icon">
								<svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="26"
                                    height="7"
                                    aria-hidden="true"
                                    viewBox="0 0 26 7">
                                    <path fillRule="evenodd"
                                          d="M3.5 7a3.5 3.5 0 110-7 3.5 3.5 0 010 7zM13 7a3.5 3.5 0 110-7 3.5 3.5 0 010 7zm9.5 0a3.5 3.5 0 110-7 3.5 3.5 0 010 7z"/>
								</svg>
							</span>
							<span className="toggle-text">Menu</span>
						</span>
                    </button>
                    {/* .nav-toggle */}

                </div>
                {/* .header-titles-wrapper */}

                <div className="header-navigation-wrapper">


                    <Menu />
                    {/* .primary-menu-wrapper */}


                    <div className="header-toggles hide-no-js">


                        <div className="toggle-wrapper nav-toggle-wrapper has-expanded-menu">

                            <button className="toggle nav-toggle desktop-nav-toggle" data-toggle-target=".menu-modal"
                                    data-toggle-body-class="showing-menu-modal" aria-expanded="false"
                                    data-set-focus=".close-nav-toggle">
									<span className="toggle-inner">
										<span className="toggle-text">Menu</span>
										<span className="toggle-icon">
											    <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="26"
                                                    height="7"
                                                    aria-hidden="true"
                                                    viewBox="0 0 26 7"
                                                >
                                                    <path fillRule="evenodd"
                                                          d="M3.5 7a3.5 3.5 0 110-7 3.5 3.5 0 010 7zM13 7a3.5 3.5 0 110-7 3.5 3.5 0 010 7zm9.5 0a3.5 3.5 0 110-7 3.5 3.5 0 010 7z"/>
											    </svg>
										</span>
									</span>
                            </button>
                            {/* .nav-toggle */}

                        </div>
                        {/* .nav-toggle-wrapper */}


                    </div>
                    {/* .header-toggles */}

                </div>
                {/* .header-navigation-wrapper */}

            </div>
            {/* .header-inner */}


        </header>
    )
}

export default Header
