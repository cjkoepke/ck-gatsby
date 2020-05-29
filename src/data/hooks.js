import { useStaticQuery, graphql } from "gatsby"
export const useGeneralSettings = () => {
  const { wpgraphql, site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            siteUrl
          }
        }
        wpgraphql {
          ...GeneralSettings
        }
      }
    `
  )

  return {
   ...wpgraphql.generalSettings,
    url: site.siteMetadata.siteUrl
  }
}
