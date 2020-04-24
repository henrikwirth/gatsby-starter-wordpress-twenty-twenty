import React from 'react'
import {Link} from "gatsby"
import {getFormattedDate} from "../utils/get-date";
import {normalizePath} from "../utils/normalize-path";
import AuthorIcon from "../assets/svg/author.inline.svg"
import DateIcon from "../assets/svg/date.inline.svg";
import CommentIcon from "../assets/svg/comment.inline.svg";
import NonStretchedImage from "../utils/non-stretched-img";

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
                        <div className="post-meta-wrapper post-meta-single post-meta-single-top">

                            <ul className="post-meta">

                                <li className="post-author meta-wrapper">
						        <span className="meta-icon">
							        <span className="screen-reader-text">Post author</span>
                                    <AuthorIcon/>
                                </span>
                                    <span className="meta-text">
                                    By <Link to={"/" + post.author.uri}>
                                        {
                                            (post.author.firstName ? (post.author.lastName ? post.author.firstName + " " + post.author.lastName : post.author.firstName) : post.author.name)
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
                                        {getFormattedDate(post.date)}
                                    </span>
                                </li>
                                <li className="post-comment-link meta-wrapper">
                                    <span className="meta-icon">
                                        <CommentIcon/>
                                    </span>
                                    <span className="meta-text">
							            <a href="#respond">
                                            No Comments<span className="screen-reader-text"> on Page 1</span>
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
