import React from "react"
import AuthorIcon from "../assets/svg/author.inline.svg"
import { Link } from "gatsby"
import DateIcon from "../assets/svg/date.inline.svg"
import CommentIcon from "../assets/svg/comment.inline.svg"

const PostMeta = ({ author, title, date }) => {
  author = author?.node
  return (
    <div className="post-meta-wrapper post-meta-single post-meta-single-top">
      <ul className="post-meta">
        <li className="post-author meta-wrapper">
          <span className="meta-icon">
            <span className="screen-reader-text">Post author</span>
            <AuthorIcon />
          </span>
          <span className="meta-text">
            By{" "}
            <Link to={author.uri}>
              {author.firstName
                ? author.lastName
                  ? author.firstName + " " + author.lastName
                  : author.firstName
                : author.name}
            </Link>
          </span>
        </li>
        <li className="post-date meta-wrapper">
          <span className="meta-icon">
            <span className="screen-reader-text">Post date</span>
            <DateIcon />
          </span>
          <span className="meta-text">{date}</span>
        </li>
        <li className="post-comment-link meta-wrapper">
          <span className="meta-icon">
            <CommentIcon />
          </span>
          <span className="meta-text">
            <a href="#respond">
              {/*TODO: Dynamic comments*/}
              No Comments
              <span className="screen-reader-text">
                {" "}
                on <span dangerouslySetInnerHTML={{ __html: title }} />
              </span>
            </a>
          </span>
        </li>
      </ul>
    </div>
  )
}

export default PostMeta
