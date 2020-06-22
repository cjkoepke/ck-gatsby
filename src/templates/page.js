import React from "react"
import Parse from 'react-html-parser'
import { graphql } from 'gatsby'
import { Helmet } from "react-helmet"
import { useGeneralSettings } from "../data/hooks"
import Image from "gatsby-image"
import Layout from "../components/Layout"
import PostBlocks from "../components/PostBlocks"
import PostHeader from "../components/PostHeader"
import Form from '../components/Form'

export default ({
  location,
  data: {
    wpgraphql: { page },
  },
}) => {
  const generalSettings = useGeneralSettings()
  const featuredImage = page?.featuredImage?.localFile?.childImageSharp?.fluid
  const excerpt = page?.content.replace(/(<([^>]+)>)/ig, '').slice(0, 150).trim();

  return (
    <Layout location={location}>
      <Helmet titleTemplate={`%s | ${generalSettings.title}`}>
        <title>{Parse(page.title)}</title>
        <meta name="description" content={`${excerpt}...`} />
        <meta property="og:title" content={Parse(page.title)} />
        <meta property="og:description" content={`${excerpt}...`} />
        <meta property="og:url" content={location.href} />
      </Helmet>
      <article className="post">
        <PostHeader {...page} />
        {featuredImage && (
          <div className="post-header__image">
            <Image fluid={featuredImage} />
          </div>
        )}
        <PostBlocks {...page} />
        {'Contact' === page.title
          ? <Form id="contactForm" />
          : null}
      </article>
    </Layout>
  )
}

export const query = graphql`
  query Page($id: ID!) {
    wpgraphql {
      page(id: $id) {
        blocks {
          ...AllBlocks
        }
        content
        date
        title
        slug
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
