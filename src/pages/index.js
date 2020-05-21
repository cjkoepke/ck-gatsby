import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import { useGeneralSettings } from '../data/hooks'
import Layout from "../components/Layout"
import PostBlocks from "../components/PostBlocks"

export default ({ data, location }) => {
  const generalSettings = useGeneralSettings()
  const page = data?.wpgraphql?.page
  const featuredImage = page?.featuredImage?.localFile?.childImageSharp?.fixed
  console.log(page)
  return (
    <Layout location={location}>
      <Helmet titleTemplate={`%s | ${generalSettings.title}`}>
        {featuredImage && (
          <meta property="og:image" content={featuredImage.src} />
        )}
      </Helmet>
      <article className="post">
        <PostBlocks {...page} />
      </article>
    </Layout>
  )
}

export const query = graphql`
  query {
    wpgraphql {
      page(id: "32", idType: DATABASE_ID) {
        blocks {
          ...AllBlocks
        }
        date
        title
        slug
        featuredImage {
          altText
          sourceUrl
          localFile {
            childImageSharp {
              fixed(width: 500) {
                ...GatsbyImageSharpFixed_withWebp_tracedSVG
              }
            }
          }
        }
      }
    }
  }
`
