import React from "react"
import Parse from 'react-html-parser'
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import { useGeneralSettings } from "../data/hooks"
import Layout from "../components/Layout"
import PostBlocks from "../components/PostBlocks"
import PostHeader from "../components/PostHeader"

export default ({
  location,
  data: {
    wpgraphql: { post },
  },
}) => {
  const generalSettings = useGeneralSettings()
  const excerpt = post.excerpt.replace(/(<([^>]+)>)/ig, '');

  return (
    <Layout location={location}>
      <Helmet titleTemplate={`%s | ${generalSettings.title}`}>
        <title>{Parse(post.title)}</title>
        <meta name="description" content={excerpt} />
        <meta property="og:title" content={Parse(post.title)} />
        <meta property="og:description" content={excerpt} />
        <meta property="og:url" content={location.href} />
      </Helmet>
      <article className="post">
        <PostHeader {...post} />
        <PostBlocks {...post} />
      </article>
    </Layout>
  )
}

export const query = graphql`
  query Post($id: ID!) {
    wpgraphql {
      post(id: $id) {
        blocks {
          ...AllBlocks
        }
        date
        excerpt
        title
        slug
        postId
        author {
          description
          nickname
          firstName
          lastName
          username
        }
        featuredImage {
          altText
          sourceUrl
          localFile {
            childImageSharp {
              fluid(maxWidth: 700) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
        }
      }
    }
  }
`
