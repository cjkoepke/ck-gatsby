import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import Layout from "../components/Layout"
import PostExcerpt from '../components/PostExcerpt'
import Paragraph from '../components/PostBlocks/blocks/Paragraph'

export default ({ data, location }) => {
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
      <article className="post">
        <Paragraph content={`Hey there! 👋. My name is Calvin, and I'm a software engineer currently working at <a href="https://10up.com">10up</a>, building really fun things for really fun companies.`} />
        <Paragraph content={`Aside from that, I spend a lot of my time <a href="/posts/pendulums">camping</a>, doing house projects, and raising my 3 boys with my beautiful wife.`} />

        <h2 id="posts">Recent Posts</h2>
        {posts?.wpgraphql?.posts?.nodes ? (
          <ul>
            {posts?.wpgraphql?.posts?.nodes.map(post => <li key={post.title}><PostExcerpt {...post} /></li>)}
          </ul>
        ) : (
          <p>Sorry, no posts were found.</p>
        )}
      </article>
    </Layout>
  )
}
