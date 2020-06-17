import React from "react"
import Parse from "react-html-parser"
import { transformLinks } from '../../../../helpers/functions'
import "./styles.css"

export default function Paragraph({ content, dropCap, fontSize, align }) {
  const classNames = []
  if (dropCap) {
    classNames.push(`p--dropCap`)
  }

  if (fontSize) {
    classNames.push(`p--${fontSize}`)
  }

  if (align) {
    classNames.push(`p--${align}`)
  }

  return (
    <p className={classNames.length ? classNames.join(" ") : null}>
      {Parse(content, {
        transform: transformLinks,
      })}
    </p>
  )
}
