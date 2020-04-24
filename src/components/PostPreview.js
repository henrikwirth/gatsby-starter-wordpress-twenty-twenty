import React from 'react'
import {Link} from "gatsby"
import {getFormattedDate} from "../utils/get-date";
import {normalizePath} from "../utils/normalize-path";
import AuthorIcon from "../assets/svg/author.inline.svg"
import DateIcon from "../assets/svg/date.inline.svg";
import CommentIcon from "../assets/svg/comment.inline.svg";
import NonStretchedImage from "../utils/non-stretched-img";
import PostMeta from "./PostMeta";

const PostPreview = ({post, isLast}) => {
    return (
        <>
            <article
                className={`post-${post.databaseId} post type-post status-publish format-standard has-post-thumbnail hentry category-uncategorized`}
                id={`post-${post.databaseId}`}>
                <header className="entry-header has-text-align-center">
                    <div className="entry-header-inner section-inner medium">

                        {
                            post.categories &&
                            <div className="entry-categories">
                                <span className="screen-reader-text">Categories</span>
                                <div className="entry-categories-inner">
                                    {
                                        post.categories.nodes.map((category, index) => (
                                            <Link to={normalizePath(category.uri)}
                                                  key={index}
                                                  rel="category tag">
                                                {category.name}
                                            </Link>
                                        ))
                                    }
                                </div>
                                {/* .entry-categories-inner */}
                            </div>
                        }
                        {/* .entry-categories */}


                        <h2 className="entry-title heading-size-1">
                            <Link to={normalizePath(post.uri)}>
                                {post.title}
                            </Link>
                        </h2>
                        <PostMeta title={post.title} author={post.author} date={post.date} />



                    </div>
                    {/* .entry-header-inner */}

                </header>
                {/* .entry-header */}
                {
                    post.featuredImage &&
                    <figure className="featured-media">

                        <div className="featured-media-inner section-inner medium">


                            <NonStretchedImage fluid={post.featuredImage.remoteFile.childImageSharp.fluid}/>

                        </div>
                        {/* .featured-media-inner */}

                    </figure>
                }
                {/* .featured-media */}

                <div className="post-inner thin ">

                    <div className="entry-content">
                        <div dangerouslySetInnerHTML={{__html: post.excerpt}}/>

                    </div>
                    {/* .entry-content */}

                </div>
                {/* .post-inner */}

            </article>
            {
                !isLast &&
                <hr key={post.postId + "-hr"} className="post-separator styled-separator is-style-wide section-inner"
                    aria-hidden="true"/>
            }
        </>

    )
}

export default PostPreview;
