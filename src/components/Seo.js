import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { StaticQuery, graphql } from "gatsby"

function Seo({ description, lang, meta, keywords, title, socialImage, uri = "", }) {


  const imageMeta = (siteUrl) =>
    (siteUrl && socialImage?.localFile)
      ? [
        {
          property: "og:image",
          content: siteUrl + socialImage.localFile.publicURL,
        },
        {
          property: "og:image:width",
          content: socialImage.mediaDetails.width,
        },
        {
          property: "og:image:height",
          content: socialImage.mediaDetails.height,
        },
        {
          name: "twitter:image",
          content: siteUrl + socialImage.localFile.publicURL,
        },
        {
          name: "twitter:image:width",
          content: socialImage.mediaDetails.width,
        },
        {
          name: "twitter:image:height",
          content: socialImage.mediaDetails.height,
        },
        {
          name: "twitter:image:alt",
          content: socialImage.altText,
        },
      ]
      : []

  return (
    <StaticQuery
      query={detailsQuery}
      render={(data) => {
        const {site, wp} = data

        const siteUrl = site.siteMetadata.siteUrl || ""

        const metaDescription =
          description ||
          wp.generalSettings.description ||
          site.siteMetadata.description

        const titleText = title
          ? `${title} | ${
              wp.generalSettings.description ||
              site.siteMetadata.title
            }`
          : wp.generalSettings.description || site.siteMetadata.title

        return (
          <Helmet
            htmlAttributes={{
              lang,
            }}
            title={titleText}
            titleTemplate={`%s`}
            link={[
              {
                rel: 'canonical',
                href: siteUrl + uri
              }
            ]}
            meta={[
              {
                name: `description`,
                content: metaDescription,
              },
              {
                property: "og:url",
                content: siteUrl + uri,
              },
              {
                property: `og:title`,
                content: title,
              },
              {
                property: `og:description`,
                content: metaDescription,
              },
              {
                property: `og:type`,
                content: `website`,
              },
              {
                name: `twitter:card`,
                content: `summary`,
              },
              {
                name: `twitter:creator`,
                content: site.siteMetadata.author,
              },
              {
                name: `twitter:title`,
                content: title,
              },
              {
                name: `twitter:description`,
                content: metaDescription,
              },
            ]
              .concat(
                keywords.length > 0
                  ? {
                      name: `keywords`,
                      content: keywords.join(`, `),
                    }
                  : []
              )
              .concat(imageMeta(siteUrl))
              .concat(meta)}
          />
        )
      }}
    />
  )
}

Seo.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: [],
}

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
  image: PropTypes.object
}

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
        siteUrl
      }
    }
    wp {
      generalSettings {
        title
        description
      }
    }
  }
`

export default Seo
