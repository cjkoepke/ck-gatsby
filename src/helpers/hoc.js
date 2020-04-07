import React from "react"
import { Link } from "gatsby"
import { useGeneralSettings } from "../data/hooks"

/**
 * Localize urls against the blog domain,
 * and return the appropriate component.
 *
 * @param {string} url Original URL value.
 * @param {string} label The menu item text.
 */
export const MaybeLink = ({ url, label, ...rest }) => {
  const { url: siteURL } = useGeneralSettings()
  if (-1 !== url.indexOf(siteURL)) {
    return (
      <Link to={url.replace(siteURL, "")} {...rest}>
        {label}
      </Link>
    )
  }

  if (0 === url.indexOf("/")) {
    return (
      <Link to={url} {...rest}>
        {label}
      </Link>
    )
  }

  return (
    <a href={url} {...rest}>
      {label}
    </a>
  )
}
