import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import { Helmet } from "react-helmet"
import Parse from 'react-html-parser'
import { useGeneralSettings } from "../../data/hooks"
import favicon from '../../assets/images/logo-mark-transparent.png'

export default ( location ) => {
  const { title, description } = useGeneralSettings()
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          siteUrl
        }
      }
    }
  `);
  return (
    <Helmet defaultTitle={`${Parse(title)} | ${description}`}>
      <meta name="description" content={description} />
      <link
        rel="apple-touch-icon"
        sizes="616x616"
        href={favicon}
      />
      <link rel="manifest" href="/manifest.webmanifest" />
      <link
        rel="mask-icon"
        href={favicon}
        color="#000000"
      />
      <link rel="shortcut icon" href={favicon} />
      <link rel="alternate" type="application/rss+xml" href="/rss/posts.xml" />

      <meta property="og:title" content={Parse(title)} />
      <meta property="og:description" content={Parse(description)} />
      <meta property="og:image" content={`${site?.siteMetadata?.siteUrl}/assets/images/calvin.jpeg`} />
      <meta property="og:url" content={location.href} />
      <meta name="twitter:card" content="summary" />
    </Helmet>
  )
}
