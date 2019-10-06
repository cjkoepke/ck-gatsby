import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import Index from '../components/Layouts'
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
		<Index>
			<SEO title={`Posts`}/>
			<p>Everything I've ever written about.</p>
			{posts && posts.map( post => post && (
				<Link key={post.slug} to={`/posts/${post.slug}`} dangerouslySetInnerHTML={{ __html: post.title }}></Link>
			))}
		</Index>
	)
}
