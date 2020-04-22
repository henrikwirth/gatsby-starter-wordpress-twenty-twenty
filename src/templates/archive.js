import React from "react"
import {graphql, Link} from "gatsby"
// import PostEntry from "../../components/post-entry"
import Layout from "../components/Layout";
import Seo from "../components/Seo";
// import SEO from "../../components/seo"
// import NextIcon from "../../components/icons/next"
// import PreviousIcon from "../../components/icons/previous"
import PostPreview from "../components/post-preview"

const renderPreviousLink = props => {
    const {
        pageContext: {pageNumber},
    } = props

    let previousLink = null

    if (!pageNumber || pageNumber === 1) {
        return null
    } else if (2 === pageNumber) {
        previousLink = `/`
    } else if (2 < pageNumber) {
        previousLink = `/page/${pageNumber - 1}`
    }

    return (
        <Link className="prev page-numbers" to={previousLink}>
            {/*<PreviousIcon />*/}
            <span className="nav-prev-text">Newer posts</span>
        </Link>
    )
}

const renderNextLink = props => {
    const {
        pageContext: {hasNextPage, pageNumber},
    } = props

    if (hasNextPage) {
        return (
            <Link className="next page-numbers" to={`/page/${pageNumber + 1}`}>
                <span className="nav-next-text">Older posts</span>
                {/*<NextIcon />*/}
            </Link>
        )
    } else {
        return null
    }
}

const Archive = (props) => {
    const {
        data: {
            allWpPost: {nodes},
        },
        pageContext: {pageNumber},
    } = props

    console.log(props)
    return (
        <Layout bodyClass="home blog wp-embed-responsive has-no-pagination showing-comments hide-avatars footer-top-visible customize-support">
            <Seo title="Home" description="Welcome to the Twenty Nineteen Theme."/>

            {
                nodes &&
                nodes.map((post, index) => {
                        return <PostPreview key={index} post={post} isLast={index === nodes.length - 1}/>
                    }
                )
            }


            <nav className="navigation pagination" role="navigation">
                <h2 className="screen-reader-text">Posts navigation</h2>
                <div className="nav-links">
                    {renderPreviousLink(props)}
                    <span aria-current="page" className="page-numbers current">
                {/*{pageNumber}*/}
                </span>
                    {renderNextLink(props)}
                </div>
            </nav>
        </Layout>
    )
}

export const query = graphql`
    fragment Thumbnail on File {
        childImageSharp {
            fluid(maxWidth: 1200) {
                ...GatsbyImageSharpFluid_tracedSVG
            }
        }
    }

    query ArchivePage($offset: Int!, $perPage: Int!) {
        allWpPost(
            limit: $perPage
            skip: $offset
            filter: {nodeType: {in: ["Post", "Page", "Alot"]}}
            sort: {fields: date, order: DESC}
        ) {
            nodes {
                uri
                title
                databaseId
                excerpt
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
        }

    }
`

export default Archive
