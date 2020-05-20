import React from "react"
import Image from "gatsby-image"
import Date from "../Date"
import Avatar from '../Avatar'
import "./styles.css"

export default ({ title, date, featuredImage }) => {
  const topImage = featuredImage?.localFile?.childImageSharp?.fluid
  return (
    <div className={`post-meta`}>
      <div className={`post-meta__info`}>
        <Date dateString={date} />
      </div>
      <h1
        className={`post-meta__title`}
        dangerouslySetInnerHTML={{ __html: title }}
      ></h1>
      {topImage && (
        <div className="post-header__image">
          <Image fluid={topImage} />
        </div>
      )}
    </div>
  )
}
