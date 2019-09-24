import React from 'react';
import {StaticQuery, graphql, useStaticQuery} from 'gatsby';
import Layout from '../components/layout'
import SEO from '../components/seo'

export default () => {
	const data = useStaticQuery( graphql`
		query GET_POSTS {
			allWordPress {
				posts {
					edges {
						node {
							title
							excerpt
							slug
						}
					}
				}
			}
		}
	` )

	const { allWordPress: { posts } } = data
	return (
		<Layout>
			<SEO title={`Posts`}/>
			<p>Everything I've ever written about.</p>
			{posts.edges && posts.edges.map( edge => {
				const post = edge.node || false
				if ( post ) {
					return post.title
				}
			})}
		</Layout>
	)
}
