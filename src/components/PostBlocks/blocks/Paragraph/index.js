import React from "react"

export default function Paragraph({ content, dropCap, fontSize }) {
  const classNames = []
  if (dropCap) {
    classNames.push(`p--dropCap`)
  }

  if (fontSize) {
    classNames.push(`p--${fontSize}`)
  }
  return (
    <p
      className={classNames.length ? classNames.join(" ") : null}
      dangerouslySetInnerHTML={{ __html: content }}
    ></p>
  )
}
