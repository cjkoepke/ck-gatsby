import React from "react"
import Image from "gatsby-image"
import blockMap from "./blocks"

export default ({ blocks, featuredImage }) => {
  console.log(blocks)
  const topImage = featuredImage?.localFile?.childImageSharp?.fluid
  return (
    <div className={`post__blocks`}>
      {topImage && (
        <div className="post-header__image">
          <Image fluid={topImage} />
        </div>
      )}
      {blocks &&
        blocks.map((data, index) => {
          const Block = blockMap[data.name] || false

          if (!Block) {
            return null
          }

          return <Block key={`${data.name}-${index}`} {...data.attributes} />
        })}
    </div>
  )
}
