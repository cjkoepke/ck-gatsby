import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/Layout"
import PostExcerpt from "../components/PostExcerpt"

export default ({ location }) => {
  const posts = useStaticQuery(graphql`
    query {
      wpgraphql {
        posts {
          nodes {
            date
            excerpt
            title
            slug
            postId
          }
        }
      }
    }
  `)

  return (
    <Layout location={location}>
      {posts?.wpgraphql?.posts?.nodes ? (
        posts?.wpgraphql?.posts?.nodes.map(post => <PostExcerpt {...post} key={post.title} />)
      ) : (
        <p>Sorry, no posts were found.</p>
      )}
    </Layout>
  )
}
