import React from "react"
import {graphql} from "gatsby"
import Layout from "../../components/Layout"
import Seo from "../../components/Seo"
import Img from "gatsby-image"
import Comments from "../../components/Comments"
import ContentTypePagination from "../../components/Content-Type-Pagination"
import AuthorIcon from "../../assets/svg/author.inline.svg"
import DateIcon from "../../assets/svg/date.inline.svg"
import CommentIcon from "../../assets/svg/comment.inline.svg"

export default ({data}) => {
    const {nextPage, previousPage, page} = data
    const {title, content, featuredImage, excerpt, databaseId} = page

    return (
        <Layout bodyClass={`post-template-default single single-post postid-${databaseId} single-format-standard wp-embed-responsive singular has-post-thumbnail has-single-pagination showing-comments hide-avatars footer-top-visible customize-support`}>
            <Seo title={title} description={excerpt}/>

            <article
                className={`post-${databaseId} post type-post status-publish format-standard has-post-thumbnail hentry category-uncategorized`}
                id={`post-${databaseId}`}>

                <header className="entry-header has-text-align-center header-footer-group">

                    <div className="entry-header-inner section-inner medium">


                        <div className="entry-categories">
                            <span className="screen-reader-text">Categories</span>
                            <div className="entry-categories-inner">
                                <a href="https://henrik-thesis-10.local/category/uncategorized/"
                                   rel="category tag">Uncategorized</a>
                            </div>
                            {/* .entry-categories-inner */}
                        </div>
                        {/* .entry-categories */}

                        <h1 className="entry-title">{title}</h1>
                        <div className="post-meta-wrapper post-meta-single post-meta-single-top">

                            <ul className="post-meta">

                                <li className="post-author meta-wrapper">
                                    <span className="meta-icon">
                                        <span className="screen-reader-text">Post author</span>
                                        <AuthorIcon/>

                                    </span>
                                    <span className="meta-text">
							            By <a href="https://henrik-thesis-10.local/author/admin/">Henrik Wirth</a>
                                    </span>
                                </li>
                                <li className="post-date meta-wrapper">
                                    <span className="meta-icon">
                                        <span className="screen-reader-text">Post date</span>
                                        <DateIcon/>
                                    </span>
                                    <span className="meta-text">
                                        <a href="https://henrik-thesis-10.local/page-1/">April 22, 2020</a>
                                    </span>
                                </li>
                                <li className="post-comment-link meta-wrapper">
                                    <span className="meta-icon">
                                        <CommentIcon />
                                    </span>
                                    <span className="meta-text">
                                        <a href="#respond">
                                            No Comments<span className="screen-reader-text"> on {title}</span>
                                        </a>
                                    </span>
                                </li>

                            </ul>
                            {/* .post-meta */}

                        </div>
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


                    <ContentTypePagination previousPage={previousPage} nextPage={nextPage} contentType={"Post"}/>


                    <Comments/>

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
    query post($id: String!, $nextPage: String, $previousPage: String) {
        page: wpPost(id: {eq: $id}) {
            title
            content
            excerpt
            featuredImage {
                remoteFile {
                    ...HeroImage
                }
            }
        }

        nextPage: wpPost(id: {eq: $nextPage}) {
            title
            uri
        }

        previousPage: wpPost(id: {eq: $previousPage}) {
            title
            uri
        }
    }
`
