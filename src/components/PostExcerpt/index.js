import React from "react"
import Date from "../Date"
import Button from "../Button"
import { Link } from "gatsby"
import { decodeText } from "../../helpers/formatting"

export default ({ title, author, date, excerpt, slug }) => {
  return (
    <article className={`preview`}>
      <h2>
        <Link to={`/posts/${slug}`}>{decodeText(title)}</Link>
      </h2>
      <Date dateString={date} />
      <div
        className="preview__excerpt"
        dangerouslySetInnerHTML={{ __html: excerpt }}
      ></div>
      <Button url={slug} label={`Read More`} />
    </article>
  )
}
