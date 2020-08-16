import React from "react"
import NonStretchedImage from "../utils/non-stretched-img"

const FeaturedMedia = ({ image }) => {
  if (!image?.node?.remoteFile?.childImageSharp?.fluid) return null

  return (
    <div className="featured-media">
      <div className="featured-media-inner section-inner">
        <NonStretchedImage
          className="attachment-post-thumbnail size-post-thumbnail wp-post-image"
          fluid={image.node.remoteFile.childImageSharp.fluid}
        />
      </div>
    </div>
  )
}

export default FeaturedMedia
