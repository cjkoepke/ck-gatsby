import React from "react"
import blockMap from "./blocks"

export default ({ blocks }) => {
  return (
    <div className={`post__blocks`}>
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
