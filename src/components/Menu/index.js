import React from "react"
import { MaybeLink } from "../../helpers/hoc"
import { useGeneralSettings } from '../../data/hooks'
import { graphql, useStaticQuery } from "gatsby"
import "./styles.css"

/**
 * The Menu component.
 */
export default ({ path }) => {
  const {
    wpgraphql: { primaryMenu },
  } = useStaticQuery(graphql`
    query {
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

  const { url: siteURL } = useGeneralSettings()

  return (
    primaryMenu && (
      <ul className={`navigation`}>
        {primaryMenu.nodes.map(item => {
          const { label, url } = item
          const active = path === url.replace(siteURL, "");
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
