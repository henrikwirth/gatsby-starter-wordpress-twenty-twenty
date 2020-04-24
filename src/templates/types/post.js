import React from "react"
import {graphql, Link} from "gatsby"
import Layout from "../../components/Layout"
import Seo from "../../components/Seo"
import Img from "gatsby-image"
import Comments from "../../components/Comments"
import ContentTypePagination from "../../components/ContentTypePagination"
import AuthorIcon from "../../assets/svg/author.inline.svg"
import DateIcon from "../../assets/svg/date.inline.svg"
import CommentIcon from "../../assets/svg/comment.inline.svg"
import {normalizePath} from "../../utils/normalize-path";
import {getFormattedDate} from "../../utils/get-date";
import GatsbyImageWithIEPolyfill from "gatsby-image/withIEPolyfill";
import NonStretchedImage from "../../utils/non-stretched-img";

export default ({data}) => {
    const {nextPage, previousPage, page} = data
    const {title, content, featuredImage, excerpt, databaseId, author} = page

    const description = author.description.replace(/(\r\n|\n|\r)/gm, "<br/>")

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

                        <div className="post-meta-wrapper post-meta-single post-meta-single-top">

                            <ul className="post-meta">

                                <li className="post-author meta-wrapper">
                                    <span className="meta-icon">
                                        <span className="screen-reader-text">Post author</span>
                                        <AuthorIcon/>

                                    </span>
                                    <span className="meta-text">
							            By <Link to={"/" + page.author.uri}>
                                        {
                                            (page.author.firstName ? (page.author.lastName ? page.author.firstName + " " + page.author.lastName : page.author.firstName) : page.author.name)
                                        }
                                        </Link>
                                    </span>
                                </li>

                                <li className="post-date meta-wrapper">
                                    <span className="meta-icon">
                                        <span className="screen-reader-text">Post date</span>
                                        <DateIcon/>
                                    </span>
                                    <span className="meta-text">
                                         {getFormattedDate(page.date)}
                                    </span>
                                </li>
                                <li className="post-comment-link meta-wrapper">
                                    <span className="meta-icon">
                                        <CommentIcon/>
                                    </span>
                                    <span className="meta-text">
                                        <a href="#respond">
                                            {/*TODO: Dynamic comments*/}
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
                                <NonStretchedImage
                                    className="attachment-post-thumbnail size-post-thumbnail wp-post-image"
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
                    {/*<div className="post-meta-wrapper post-meta-edit-link-wrapper">*/}
                    {/*    <ul className="post-meta">*/}
                    {/*    </ul>*/}
                    {/*    /!* .post-meta --></d*!/*/}
                    {/*    /!* .post-meta-wrapper *!/*/}
                    {/*</div>*/}

                    <div className="author-bio">
                        <div className="author-title-wrapper">
                            <div className="author-avatar vcard">
                                <div className="avatar avatar-160 wp-user-avatar wp-user-avatar-160 alignnone photo">
                                    {
                                        author?.avatar?.imageFile?.childImageSharp && (
                                            <GatsbyImageWithIEPolyfill
                                                fixed={author.avatar.imageFile.childImageSharp.fixed}
                                                objectFit="cover"
                                                objectPosition="50% 50%"
                                                alt=""
                                                className="avatar"
                                            />
                                        )
                                    }
                                </div>

                                {/*<img*/}
                                {/*    src="https://gatsby-wp.mobileui.dev/wp-content/uploads/2020/04/henrik_nevernull-e1587733888638.png"*/}
                                {/*    width="160" height="152" alt="Henrik Wirth"*/}
                                {/*    className="avatar avatar-160 wp-user-avatar wp-user-avatar-160 alignnone photo"/>*/}
                            </div>
                            <h2 className="author-title heading-size-4">
                                By {author.name}
                            </h2>
                        </div>
                        {/*  .author-name */}
                        <div className="author-description">

                            <div dangerouslySetInnerHTML={{__html: description}}/>

                            <Link className="author-link" to="/author/henrik/"
                                  rel="author">
                                View Archive <span aria-hidden="true">→</span> </Link>
                        </div>
                        {/*  .author-description */}
                    </div>

                    <ContentTypePagination previousPage={previousPage} nextPage={nextPage} contentType={"Post"}/>


                    <Comments/>

                </div>
                {/* .section-inner */}
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
