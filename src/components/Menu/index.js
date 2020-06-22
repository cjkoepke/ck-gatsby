import React from "react"
import MaybeLink from "../MaybeLink"
import { graphql, useStaticQuery } from "gatsby"
import "./styles.css"

/**
 * The Menu component.
 */
export default ({ path }) => {
  const {
    wpgraphql: { primaryMenu },
    site: { siteMetadata }
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          siteUrl
        }
      }
      wpgraphql {
        primaryMenu: menuItems(where: { location: PRIMARY }) {
          nodes {
            url
            label
          }
        }
      }
    }
  `)

  return (
    primaryMenu && (
      <ul className={`navigation`}>
        {primaryMenu.nodes.map(item => {
          const { label, url } = item
          const { pathname } = new URL( url, siteMetadata.siteUrl );
          const active = path === pathname;
          return (
            <li key={url} className={active ? 'active' : ''}>
              <MaybeLink url={url} label={label} />
            </li>
          )
        })}
      </ul>
    )
  )
}
