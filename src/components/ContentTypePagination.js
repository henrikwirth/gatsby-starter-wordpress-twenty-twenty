import React from "react"
import { Link } from "gatsby"

const ContentTypePagination = ({ previousPage, nextPage, contentType }) => {
  return (
    <nav
      className="pagination-single section-inner"
      aria-label={contentType}
      role="navigation"
    >
      <hr className="styled-separator is-style-wide" aria-hidden="true" />

      <div className="pagination-single-inner">
        {previousPage && (
          <Link className="previous-post" to={previousPage.uri}>
            <span className="arrow" aria-hidden="true">
              ←
            </span>
            <span className="title">
              <span
                className="title-inner"
                dangerouslySetInnerHTML={{ __html: previousPage.title }}
              />
            </span>
          </Link>
        )}

        {nextPage && (
          <Link className="next-post" to={nextPage.uri}>
            <span className="arrow" aria-hidden="true">
              →
            </span>
            <span className="title">
              <span
                className="title-inner"
                dangerouslySetInnerHTML={{ __html: nextPage.title }}
              />
            </span>
          </Link>
        )}
      </div>

      <hr className="styled-separator is-style-wide" aria-hidden="true" />
    </nav>
  )
}

export default ContentTypePagination
