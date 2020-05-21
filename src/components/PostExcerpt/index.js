import React from "react"
import Parse from 'react-html-parser'
import Date from "../Date"
import { Link } from "gatsby"
import './styles.css'

export default ({ title, author, date, excerpt, slug }) => {
  return (
    <article className={`excerpt`}>
      <Date dateString={date} className={`excerpt__date`} />
      <h2 className={`excerpt__title`}>
        <Link className={`excerpt__link`} to={`/posts/${slug}`}>{Parse(title)}</Link>
      </h2>
    </article>
  )
}
