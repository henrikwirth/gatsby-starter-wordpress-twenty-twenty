import React from "react"
import { Link } from "gatsby"

const PostCategories = ({ categories }) => {
  if (!categories?.nodes || categories.nodes === 0) return null

  return (
    <div className="entry-categories">
      <span className="screen-reader-text">Categories</span>
      <div className="entry-categories-inner">
        {categories.nodes.map((category, index) => (
          <Link to={category.uri} key={index} rel="category tag">
            {category.name}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default PostCategories
