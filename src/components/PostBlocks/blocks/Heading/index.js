import React from "react"

export default ({ content, level }) => {
  return React.createElement(`h${level}`, {
    dangerouslySetInnerHTML: {
      __html: content,
    },
  })
}
