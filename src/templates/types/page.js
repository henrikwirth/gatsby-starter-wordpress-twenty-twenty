import React from "react"
import {graphql, Link} from "gatsby"
import Layout from "../../components/Layout";
import Seo from "../../components/Seo";
import Img from "gatsby-image";
import urlToPath from "gatsby-source-wordpress-experimental/utils/url-to-path";
import AuthorIcon from "../../assets/svg/author.inline.svg";
import DateIcon from "../../assets/svg/date.inline.svg";
import CommentIcon from "../../assets/svg/comment.inline.svg";
import ContentTypePagination from "../../components/ContentTypePagination";
import Comments from "../../components/Comments";

export default ({data}) => {
    const {page} = data
    const {title, content, featuredImage, excerpt, databaseId} = page

    return (
        <Layout
            bodyClass={`page-template-default page page-id-${databaseId} wp-embed-responsive singular missing-post-thumbnail has-no-pagination not-showing-comments hide-avatars footer-top-visible customize-support`}>
            <Seo title={title} description={excerpt}/>

            <article
                className={`post-${databaseId} post page type-page status-publish hentry`}
                id={`post-${databaseId}`}>

                <header className="entry-header has-text-align-center header-footer-group">

                    <div className="entry-header-inner section-inner medium">


                        <h1 className="entry-title">{title}</h1>

                        {/* .post-meta-wrapper */}


                    </div>
                    {/* .entry-header-inner */}

                </header>
                {/* .entry-header */}

                <div className="featured-media">

                    <div className="featured-media-inner section-inner">

                        {
                            featuredImage?.remoteFile?.childImageSharp && (
                                <Img className="attachment-post-thumbnail size-post-thumbnail wp-post-image"
                                     fluid={featuredImage.remoteFile.childImageSharp.fluid}/>
                            )
                        }
                    </div>
                    {/* .featured-media-inner */}

                </div>
                {/* .featured-media */}


                <div className="post-inner thin">
                    <div className="entry-content" dangerouslySetInnerHTML={{__html: content}}>
                    </div>
                    {/* .entry-content */}

                </div>
                {/* .post-inner */}

                <div className="section-inner">
                    <div className="post-meta-wrapper post-meta-edit-link-wrapper">
                        <ul className="post-meta">
                        </ul>
                        {/* .post-meta --></d*/}
                        {/* .post-meta-wrapper */}
                    </div>
                    {/* .section-inner */}

                </div>
            </article>

            {/*<p dangerouslySetInnerHTML={{__html: content}}/>*/}

            {/*<br/>*/}
            {/*{!!nextPage && (*/}
            {/*    <Link to={urlToPath(nextPage.link)}>Next: {nextPage.title}</Link>*/}
            {/*)}*/}
            {/*<br/>*/}
            {/*{!!previousPage && (*/}
            {/*    <Link to={urlToPath(previousPage.link)}>*/}
            {/*        Previous: {previousPage.title}*/}
            {/*    </Link>*/}
            {/*)}*/}
        </Layout>
    )
}

export const query = graphql`
    query page($id: String!, $nextPage: String, $previousPage: String) {
        page: wpPage(id: {eq: $id}) {
            ...PageContent
        }
        nextPage: wpPage(id: {eq: $nextPage}) {
            title
            uri
        }
        previousPage: wpPage(id: {eq: $previousPage}) {
            title
            uri
        }
    }
`
