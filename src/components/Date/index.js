import React from "react"
import { parseISO, format } from "date-fns"

export default ({ dateString, ...rest }) => {
  const date = parseISO(dateString)
  return <time dateTime={dateString} {...rest}>{format(date, "LLLL	d, yyyy")}</time>
}
