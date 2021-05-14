import { graphql } from "gatsby"

export const fragments = graphql`
  fragment HeroImage on File {
    childImageSharp {
      gatsbyImageData(layout: CONSTRAINED, quality: 90)
    }
  }

  fragment AvatarImage on File {
    childImageSharp {
      gatsbyImageData(layout: FIXED, width: 80, height: 80, quality: 90)
    }
  }

  fragment Thumbnail on File {
    childImageSharp {
      gatsbyImageData(layout: CONSTRAINED, quality: 90)
    }
  }

  fragment PostPreviewContent on WpPost {
    uri
    title
    databaseId
    excerpt
    date(formatString: "LL")
    featuredImage {
      node {
        altText
        localFile {
          ...Thumbnail
        }
      }
    }
    author {
      node {
        name
        firstName
        lastName
        uri
      }
    }
    categories {
      nodes {
        name
        slug
        uri
      }
    }
  }

  fragment PostContent on WpPost {
    title
    uri
    content
    date(formatString: "LL")
    excerpt
    featuredImage {
      node {
        altText
        localFile {
          ...HeroImage
          publicURL
        }
        mediaDetails {
          width
          height
        }
      }
    }
    author {
      node {
        name
        firstName
        lastName
        uri
        description
        avatar {
          url
          width
          height
          imageFile {
            ...AvatarImage
          }
        }
      }
    }
    categories {
      nodes {
        name
        slug
        uri
      }
    }
  }

  fragment PageContent on WpPage {
    title
    uri
    content
    databaseId
    featuredImage {
      node {
        altText
        localFile {
          ...HeroImage
          publicURL
        }
        mediaDetails {
          width
          height
        }
      }
    }
  }
`
