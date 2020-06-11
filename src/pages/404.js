import React from "react"
import Layout from "../components/Layout"
import Paragraph from '../components/PostBlocks/blocks/Paragraph'

export default ({ data, location }) => {

  return (
    <Layout location={location}>
      <article className="post">
        <h2>Oops...</h2>
        <Paragraph fontSize={`large`} content={`Well, that's not right. <a href="/">Try again</a>.`} />
      </article>
    </Layout>
  )
}
