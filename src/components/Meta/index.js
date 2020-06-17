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
        sizes="180x180"
        href="/assets/images/logo-mark-transparent.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/assets/images/logo-mark-transparent.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/assets/images/logo-mark-transparent.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/assets/images/logo-mark-transparent.png"
        color="#000000"
      />
      <link rel="shortcut icon" href="/assets/images/logo-mark-transparent.png" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#000" />
      <link rel="alternate" type="application/rss+xml" href="/rss/posts.xml" />

      <meta property="og:title" content={Parse(title)} />
      <meta property="og:description" content={Parse(description)} />
      <meta property="og:image" content={`https://calvinkoepke.com/assets/images/calvin.jpeg`} />
      <meta property="og:url" content={location.href} />
      <meta name="twitter:card" content="summary" />
    </Helmet>
  )
}
