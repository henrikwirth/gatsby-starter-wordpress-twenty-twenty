import { graphql } from "gatsby"

export const fragments = graphql`
  fragment HeroImage on File {
    childImageSharp {
      fluid(maxWidth: 1440) {
        ...GatsbyImageSharpFluid_withWebp_tracedSVG
        presentationWidth
      }
    }
  }

  fragment AvatarImage on File {
    childImageSharp {
      fixed(width: 80, height: 80) {
        ...GatsbyImageSharpFixed_withWebp_tracedSVG
      }
    }
  }

  fragment Thumbnail on File {
    childImageSharp {
      fluid(maxWidth: 1200) {
        ...GatsbyImageSharpFluid_withWebp_tracedSVG
        presentationWidth
      }
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
    content
    date(formatString: "LL")
    excerpt
    featuredImage {
      node {
        localFile {
          ...HeroImage
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
    content
    databaseId
    featuredImage {
      node {
        localFile {
          ...HeroImage
        }
      }
    }
  }
`
