import { graphql } from "gatsby"

export const fragments = graphql`
  fragment HeroImage on File {
    childImageSharp {
      fluid(maxWidth: 1440, quality: 82) {
        ...GatsbyImageSharpFluid
        presentationWidth
      }
    }
  }

  fragment AvatarImage on File {
    childImageSharp {
      fixed(width: 80, height: 80, quality: 82) {
        ...GatsbyImageSharpFixed
      }
    }
  }

  fragment Thumbnail on File {
    childImageSharp {
      fluid(maxWidth: 1200, quality: 82) {
        ...GatsbyImageSharpFluid
        presentationWidth
      }
    }
  }

  fragment PostPreviewContent on WpPost {
    uri
    title
    databaseId
    content
    date
    featuredImage {
      remoteFile {
        ...Thumbnail
      }
    }
    author {
      name
      firstName
      lastName
      uri
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
    date
    excerpt
    featuredImage {
      remoteFile {
        ...HeroImage
      }
    }
    author {
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
      remoteFile {
        ...HeroImage
      }
    }
  }
`
