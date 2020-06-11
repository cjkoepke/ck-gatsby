/**
 * Checks if the URL is an absolute path of the current site.
 */
export const isLocalAbsoluteUrl = (url, siteUrl) => {
  if (-1 !== normalizeUrlPrefix(url).indexOf(normalizeUrlPrefix(siteUrl))) {
    return true
  }

  return false
}

/**
 * Checks if a URL is relative.
 */
export const isRelativeUrl = url => 0 === url.indexOf("/")

/**
 * Normalizes the prefix of URLs.
 */
export const normalizeUrlPrefix = url => url.replace(/(^\w+:|^)\/\//, "")

/**
 * Get's relative URL from an absolute path.
 */
export const getRelativeUrl = (url, siteUrl) => {
  const newURL = new URL(url, siteUrl);
  return newURL.pathname + newURL.hash || url;
}
