import React from "react"
import Date from "../Date"
import { Link } from "gatsby"
import { decodeText } from "../../helpers/formatting"
import './styles.css'

export default ({ title, author, date, excerpt, slug }) => {
  return (
    <article className={`excerpt`}>
      <Date dateString={date} className={`excerpt__date`} />
      <h2 className={`excerpt__title`}>
        <Link className={`excerpt__link`} to={`/posts/${slug}`}>{decodeText(title)}</Link>
      </h2>
    </article>
  )
}
