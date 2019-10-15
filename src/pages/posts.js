import React, { Fragment } from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import Animation from '../components/Animation'
import Container from '../components/Container'
import Section from '../components/Section'
import SEO from '../components/seo'

export default () => {
	const data = useStaticQuery( graphql`
		query GET_POSTS {
			allWordPress {
				posts {
					nodes {
						title
						excerpt
						slug
						blocks {
							... on WPGraphQLQuery_CoreParagraphBlock {
								name
								originalContent
							}
						}
					}
				}
			}
		}
	` )

	const posts = data.allWordPress.posts.nodes
	return (
		<Fragment>
			<SEO title={`Posts`}/>
			<Section>
				<Container>
					<p>Everything I've ever written about.</p>
					{posts && posts.map((post, index) => (
						<Link key={post.slug} to={`/posts/${post.slug}`} dangerouslySetInnerHTML={{ __html: post.title }}></Link>
					))}
				</Container>
			</Section>
		</Fragment>
	)
}
