import React from "react"
import GatsbyImage from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"

const FluidImage = ({ image, withFallback = false, ...props }) => {
  const data = useStaticQuery(graphql`
      query {
          fallbackImage: file(relativePath: { eq: "images/header-logo.png" }) {
              publicURL
          }
      }
  `)

  /**
   * Return fallback Image, if no Image is given.
   */
  if (!image) {
    return withFallback ? <img src={data.fallBackImage.publicURL} alt={"Fallback"} {...props}/> : null
  }

  if (image && image.imageFile) {
    return <GatsbyImage fluid={image.imageFile.childImageSharp.fluid} alt={image.altText} {...props}/>
  }

  return <img src={image.sourceUrl} alt={image.altText} {...props}/>
}

export default FluidImage
