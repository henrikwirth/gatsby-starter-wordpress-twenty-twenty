import React from "react"
import SocialMenu from "../components/SocialMenu"
import UniversalLink from "../components/UniversalLink"

export default () => (
  <div className="landing-page">
    <h1>Frontpage</h1>
    <p>
      This is a separate landing page. The uniform theme is not applied to this page and this page can have a separate look altogether. The application of this page can be applied to other URL slugs as well.
    </p>
    <div className="button">
      <UniversalLink
        to="/sample-page"
        className="button special"
      >
        Enter
      </UniversalLink>
    </div>
    <SocialMenu />
  </div>
)
