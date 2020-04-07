import React from "react"
import { MaybeLink } from "../../helpers/hoc"
import { graphql, useStaticQuery } from "gatsby"
import "./styles.css"

/**
 * The Menu component.
 */
export default () => {
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

  return (
    primaryMenu && (
      <ul className={`navigation`}>
        {primaryMenu.nodes.map(item => {
          const { label, url } = item
          return (
            <li key={url}>
              <MaybeLink url={url} label={label} />
            </li>
          )
        })}
      </ul>
    )
  )
}
