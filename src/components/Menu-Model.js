import React from 'react';

const MenuModal = ({}) => {
    return (
        <div className="menu-modal cover-modal header-footer-group show-modal active"
             data-modal-target-string=".menu-modal">

            <div className="menu-modal-inner modal-inner">

                <div className="menu-wrapper section-inner">

                    <div className="menu-top">

                        <button className="toggle close-nav-toggle fill-children-current-color"
                                data-toggle-target=".menu-modal" data-toggle-body-class="showing-menu-modal"
                                aria-expanded="false" data-set-focus=".menu-modal">
                            <span className="toggle-text">Close Menu</span>
                            <svg className="svg-icon" aria-hidden="true" role="img" focusable="false"
                                 xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                                <polygon fill="" fillRule="evenodd"
                                         points="6.852 7.649 .399 1.195 1.445 .149 7.899 6.602 14.352 .149 15.399 1.195 8.945 7.649 15.399 14.102 14.352 15.149 7.899 8.695 1.445 15.149 .399 14.102"/>
                            </svg>
                        </button>
                        <!-- .nav-toggle -->


                        <nav className="expanded-menu" aria-label="Expanded" role="navigation">

                            <ul className="modal-menu reset-list-style">
                                <li id="menu-item-65"
                                    className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-65">
                                    <div className="ancestor-wrapper"><a href="https://henrik-thesis-10.local/"
                                                                         aria-current="page">Home</a></div>
                                    <!-- .ancestor-wrapper --></li>
                                <li id="menu-item-66"
                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-66">
                                    <div className="ancestor-wrapper"><a
                                        href="https://henrik-thesis-10.local/about/">About</a></div>
                                    <!-- .ancestor-wrapper --></li>
                                <li id="menu-item-67"
                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current_page_parent menu-item-67">
                                    <div className="ancestor-wrapper"><a
                                        href="https://henrik-thesis-10.local/blog/">Blog</a></div>
                                    <!-- .ancestor-wrapper --></li>
                                <li id="menu-item-68"
                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-68">
                                    <div className="ancestor-wrapper"><a
                                        href="https://henrik-thesis-10.local/contact/">Contact</a></div>
                                    <!-- .ancestor-wrapper --></li>
                            </ul>

                        </nav>


                        <nav className="mobile-menu" aria-label="Mobile" role="navigation">

                            <ul className="modal-menu reset-list-style">

                                <li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-61">
                                    <div className="ancestor-wrapper"><a href="https://henrik-thesis-10.local/"
                                                                         aria-current="page">Home</a></div>
                                    <!-- .ancestor-wrapper --></li>
                                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-62">
                                    <div className="ancestor-wrapper"><a
                                        href="https://henrik-thesis-10.local/about/">About</a></div>
                                    <!-- .ancestor-wrapper --></li>
                                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current_page_parent menu-item-63">
                                    <div className="ancestor-wrapper"><a
                                        href="https://henrik-thesis-10.local/blog/">Blog</a></div>
                                    <!-- .ancestor-wrapper --></li>
                                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-64">
                                    <div className="ancestor-wrapper"><a
                                        href="https://henrik-thesis-10.local/contact/">Contact</a></div>
                                    <!-- .ancestor-wrapper --></li>

                            </ul>

                        </nav>


                    </div>
                    <!-- .menu-top -->

                    <div className="menu-bottom">


                        <nav aria-label="Expanded Social links" role="navigation">
                            <ul className="social-menu reset-list-style social-icons fill-children-current-color">

                                <li id="menu-item-69"
                                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-69"><a
                                    href="https://www.yelp.com"><span className="screen-reader-text">Yelp</span>
                                    <svg className="svg-icon" aria-hidden="true" role="img" focusable="false" width="24"
                                         height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M12.271,16.718v1.417q-.011,3.257-.067,3.4a.707.707,0,0,1-.569.446,4.637,4.637,0,0,1-2.024-.424A4.609,4.609,0,0,1,7.8,20.565a.844.844,0,0,1-.19-.4.692.692,0,0,1,.044-.29,3.181,3.181,0,0,1,.379-.524q.335-.412,2.019-2.409.011,0,.669-.781a.757.757,0,0,1,.44-.274.965.965,0,0,1,.552.039.945.945,0,0,1,.418.324.732.732,0,0,1,.139.468Zm-1.662-2.8a.783.783,0,0,1-.58.781l-1.339.435q-3.067.981-3.257.981a.711.711,0,0,1-.6-.4,2.636,2.636,0,0,1-.19-.836,9.134,9.134,0,0,1,.011-1.857,3.559,3.559,0,0,1,.335-1.389.659.659,0,0,1,.625-.357,22.629,22.629,0,0,1,2.253.859q.781.324,1.283.524l.937.379a.771.771,0,0,1,.4.34A.982.982,0,0,1,10.609,13.917Zm9.213,3.313a4.467,4.467,0,0,1-1.021,1.8,4.559,4.559,0,0,1-1.512,1.417.671.671,0,0,1-.7-.078q-.156-.112-2.052-3.2l-.524-.859a.761.761,0,0,1-.128-.513.957.957,0,0,1,.217-.513.774.774,0,0,1,.926-.29q.011.011,1.327.446,2.264.736,2.7.887a2.082,2.082,0,0,1,.524.229.673.673,0,0,1,.245.68Zm-7.5-7.049q.056,1.137-.6,1.361-.647.19-1.272-.792L6.237,4.08a.7.7,0,0,1,.212-.691,5.788,5.788,0,0,1,2.314-1,5.928,5.928,0,0,1,2.5-.352.681.681,0,0,1,.547.5q.034.2.245,3.407T12.327,10.181Zm7.384,1.2a.679.679,0,0,1-.29.658q-.167.112-3.67.959-.747.167-1.015.257l.011-.022a.769.769,0,0,1-.513-.044.914.914,0,0,1-.413-.357.786.786,0,0,1,0-.971q.011-.011.836-1.137,1.394-1.908,1.673-2.275a2.423,2.423,0,0,1,.379-.435A.7.7,0,0,1,17.435,8a4.482,4.482,0,0,1,1.372,1.489,4.81,4.81,0,0,1,.9,1.868v.034Z"/>
                                    </svg>
                                </a></li>
                                <li id="menu-item-70"
                                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-70"><a
                                    href="https://www.facebook.com/wordpress"><span
                                    className="screen-reader-text">Facebook</span>
                                    <svg className="svg-icon" aria-hidden="true" role="img" focusable="false" width="24"
                                         height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M12 2C6.5 2 2 6.5 2 12c0 5 3.7 9.1 8.4 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.3v7C18.3 21.1 22 17 22 12c0-5.5-4.5-10-10-10z"/>
                                    </svg>
                                </a></li>
                                <li id="menu-item-71"
                                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-71"><a
                                    href="https://twitter.com/wordpress"><span
                                    className="screen-reader-text">Twitter</span>
                                    <svg className="svg-icon" aria-hidden="true" role="img" focusable="false" width="24"
                                         height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M22.23,5.924c-0.736,0.326-1.527,0.547-2.357,0.646c0.847-0.508,1.498-1.312,1.804-2.27 c-0.793,0.47-1.671,0.812-2.606,0.996C18.324,4.498,17.257,4,16.077,4c-2.266,0-4.103,1.837-4.103,4.103 c0,0.322,0.036,0.635,0.106,0.935C8.67,8.867,5.647,7.234,3.623,4.751C3.27,5.357,3.067,6.062,3.067,6.814 c0,1.424,0.724,2.679,1.825,3.415c-0.673-0.021-1.305-0.206-1.859-0.513c0,0.017,0,0.034,0,0.052c0,1.988,1.414,3.647,3.292,4.023 c-0.344,0.094-0.707,0.144-1.081,0.144c-0.264,0-0.521-0.026-0.772-0.074c0.522,1.63,2.038,2.816,3.833,2.85 c-1.404,1.1-3.174,1.756-5.096,1.756c-0.331,0-0.658-0.019-0.979-0.057c1.816,1.164,3.973,1.843,6.29,1.843 c7.547,0,11.675-6.252,11.675-11.675c0-0.178-0.004-0.355-0.012-0.531C20.985,7.47,21.68,6.747,22.23,5.924z"/>
                                    </svg>
                                </a></li>
                                <li id="menu-item-72"
                                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-72"><a
                                    href="https://www.instagram.com/explore/tags/wordcamp/"><span
                                    className="screen-reader-text">Instagram</span>
                                    <svg className="svg-icon" aria-hidden="true" role="img" focusable="false" width="24"
                                         height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M12,4.622c2.403,0,2.688,0.009,3.637,0.052c0.877,0.04,1.354,0.187,1.671,0.31c0.42,0.163,0.72,0.358,1.035,0.673 c0.315,0.315,0.51,0.615,0.673,1.035c0.123,0.317,0.27,0.794,0.31,1.671c0.043,0.949,0.052,1.234,0.052,3.637 s-0.009,2.688-0.052,3.637c-0.04,0.877-0.187,1.354-0.31,1.671c-0.163,0.42-0.358,0.72-0.673,1.035 c-0.315,0.315-0.615,0.51-1.035,0.673c-0.317,0.123-0.794,0.27-1.671,0.31c-0.949,0.043-1.233,0.052-3.637,0.052 s-2.688-0.009-3.637-0.052c-0.877-0.04-1.354-0.187-1.671-0.31c-0.42-0.163-0.72-0.358-1.035-0.673 c-0.315-0.315-0.51-0.615-0.673-1.035c-0.123-0.317-0.27-0.794-0.31-1.671C4.631,14.688,4.622,14.403,4.622,12 s0.009-2.688,0.052-3.637c0.04-0.877,0.187-1.354,0.31-1.671c0.163-0.42,0.358-0.72,0.673-1.035 c0.315-0.315,0.615-0.51,1.035-0.673c0.317-0.123,0.794-0.27,1.671-0.31C9.312,4.631,9.597,4.622,12,4.622 M12,3 C9.556,3,9.249,3.01,8.289,3.054C7.331,3.098,6.677,3.25,6.105,3.472C5.513,3.702,5.011,4.01,4.511,4.511 c-0.5,0.5-0.808,1.002-1.038,1.594C3.25,6.677,3.098,7.331,3.054,8.289C3.01,9.249,3,9.556,3,12c0,2.444,0.01,2.751,0.054,3.711 c0.044,0.958,0.196,1.612,0.418,2.185c0.23,0.592,0.538,1.094,1.038,1.594c0.5,0.5,1.002,0.808,1.594,1.038 c0.572,0.222,1.227,0.375,2.185,0.418C9.249,20.99,9.556,21,12,21s2.751-0.01,3.711-0.054c0.958-0.044,1.612-0.196,2.185-0.418 c0.592-0.23,1.094-0.538,1.594-1.038c0.5-0.5,0.808-1.002,1.038-1.594c0.222-0.572,0.375-1.227,0.418-2.185 C20.99,14.751,21,14.444,21,12s-0.01-2.751-0.054-3.711c-0.044-0.958-0.196-1.612-0.418-2.185c-0.23-0.592-0.538-1.094-1.038-1.594 c-0.5-0.5-1.002-0.808-1.594-1.038c-0.572-0.222-1.227-0.375-2.185-0.418C14.751,3.01,14.444,3,12,3L12,3z M12,7.378 c-2.552,0-4.622,2.069-4.622,4.622S9.448,16.622,12,16.622s4.622-2.069,4.622-4.622S14.552,7.378,12,7.378z M12,15 c-1.657,0-3-1.343-3-3s1.343-3,3-3s3,1.343,3,3S13.657,15,12,15z M16.804,6.116c-0.596,0-1.08,0.484-1.08,1.08 s0.484,1.08,1.08,1.08c0.596,0,1.08-0.484,1.08-1.08S17.401,6.116,16.804,6.116z"/>
                                    </svg>
                                </a></li>
                                <li id="menu-item-73"
                                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-73"><a
                                    href="mailto:wordpress@example.com"><span
                                    className="screen-reader-text">Email</span>
                                    <svg className="svg-icon" aria-hidden="true" role="img" focusable="false" width="24"
                                         height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M20,4H4C2.895,4,2,4.895,2,6v12c0,1.105,0.895,2,2,2h16c1.105,0,2-0.895,2-2V6C22,4.895,21.105,4,20,4z M20,8.236l-8,4.882 L4,8.236V6h16V8.236z"/>
                                    </svg>
                                </a></li>

                            </ul>
                        </nav>
                        <!-- .social-menu -->


                    </div>
                    <!-- .menu-bottom -->

                </div>
                <!-- .menu-wrapper -->

            </div>
            <!-- .menu-modal-inner -->

        </div>
    );
};


export default MenuModal;
