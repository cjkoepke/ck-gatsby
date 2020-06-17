import React from "react"
import Parse from 'react-html-parser'
import { transformLinks } from '../../../../helpers/functions'

export default ({ values, ordered }) => {
  if (!values) {
    return null
  }

  return ordered ? (
    <ol>{Parse(values, {
        transform: transformLinks
      })}</ol>
  ) : (
    <ul>{Parse(values, {
        transform: transformLinks
      })}</ul>
  )
}
