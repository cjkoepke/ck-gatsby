import React from "react"
import Image from "gatsby-image"
import "./styles.css"

export default ({ author }) => {
  const name =
    author.lastName && author.firstName
      ? `${author.firstName} ${author.lastName}`
      : ""
  const image = author?.avatar?.localFile?.childImageSharp?.fixed
  return (
    <div className={`avatar`}>
      {image && <Image fixed={image} alt={name} />}
      <div>{name}</div>
    </div>
  )
}
