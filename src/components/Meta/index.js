import React from "react"
import { Helmet } from "react-helmet"
import Parse from 'react-html-parser'
import { useGeneralSettings } from "../../data/hooks"

export default ( location ) => {
  const { title, description } = useGeneralSettings()
  return (
    <Helmet defaultTitle={`${Parse(title)} | ${description}`}>
      <meta name="description" content={description} />
      <link
        rel="apple-touch-icon"
        sizes="616x616"
        href="/logo-mark-transparent.png"
      />
      <link rel="manifest" href="/manifest.webmanifest" />
      <link
        rel="mask-icon"
        href="/logo-mark-transparent.png"
        color="#000000"
      />
      <link rel="shortcut icon" href="/logo-mark-transparent.png" />
      <link rel="alternate" type="application/rss+xml" href="/rss/posts.xml" />

      <meta property="og:title" content={Parse(title)} />
      <meta property="og:description" content={Parse(description)} />
      <meta property="og:image" content={`/calvin.jpeg`} />
      <meta property="og:url" content={location.href} />
      <meta name="twitter:card" content="summary" />
    </Helmet>
  )
}
