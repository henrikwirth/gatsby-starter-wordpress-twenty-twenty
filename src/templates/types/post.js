import React from "react"
import {graphql, Link} from "gatsby"
import Layout from "../../components/Layout"
import Seo from "../../components/Seo"
import Comments from "../../components/Comments"
import ContentTypePagination from "../../components/ContentTypePagination"
import {normalizePath} from "../../utils/normalize-path";
import NonStretchedImage from "../../utils/non-stretched-img";
import AuthorBio from "../../components/AuthorBio";
import PostMeta from "../../components/PostMeta";

export default ({data}) => {
    const {nextPage, previousPage, page} = data
    const {title, content, featuredImage, excerpt, databaseId, author, date} = page

    return (
        <Layout
            bodyClass={`post-template-default single single-post postid-${databaseId} single-format-standard wp-embed-responsive singular has-post-thumbnail has-single-pagination showing-comments footer-top-visible customize-support`}>
            <Seo title={title} description={excerpt}/>

            <article
                className={`post-${databaseId} post type-post status-publish format-standard has-post-thumbnail hentry category-uncategorized`}
                id={`post-${databaseId}`}>

                <header className="entry-header has-text-align-center header-footer-group">

                    <div className="entry-header-inner section-inner medium">


                        <div className="entry-categories">
                            <span className="screen-reader-text">Categories</span>
                            <div className="entry-categories-inner">
                                {
                                    page.categories.nodes.map((category, index) => (
                                        <Link to={normalizePath(category.uri)}
                                              key={category}
                                              rel="category tag">
                                            {category.name}
                                        </Link>
                                    ))
                                }
                            </div>
                            {/* .entry-categories-inner */}
                        </div>
                        {/* .entry-categories */}

                        <h1 className="entry-title">{title}</h1>

                        <div className="intro-text section-inner max-percentage small"
                             dangerouslySetInnerHTML={{__html: excerpt}}/>

                        <PostMeta title={title} author={author} date={date} />

                    </div>
                </header>

                <div className="featured-media">
                    <div className="featured-media-inner section-inner">
                        {
                            featuredImage?.remoteFile?.childImageSharp && (
                                <NonStretchedImage
                                    className="attachment-post-thumbnail size-post-thumbnail wp-post-image"
                                    fluid={featuredImage.remoteFile.childImageSharp.fluid}/>

                            )
                        }
                    </div>
                </div>

                <div className="post-inner thin">
                    <div className="entry-content" dangerouslySetInnerHTML={{__html: content}} />
                </div>

                <div className="section-inner">

                    <AuthorBio author={author} />

                    <ContentTypePagination previousPage={previousPage} nextPage={nextPage} contentType={"Post"}/>

                    <Comments/>

                </div>
            </article>

        </Layout>
    )
}

export const query = graphql`
    query post($id: String!, $nextPage: String, $previousPage: String) {
        page: wpPost(id: {eq: $id}) {
            ...PostContent
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
