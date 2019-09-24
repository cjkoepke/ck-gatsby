/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;

const path = require('path')
const fetch = require('node-fetch')

exports.createPages = ({ graphql, actions }) => {
	const { createPage } = actions
	const blogPostTemplate = path.resolve( 'src/templates/post.js' )

	fetch( 'https://gatsby.dev/graphql', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify( {
			query: `
			{
			  posts(first: 0, last: 2) {
			    pageInfo {
			      startCursor
			    }
			    edges {
			      node {
			        title
			        content
			      }
			    }
			  }
			}
		`
		})
	})
		.then( res => res.json() )
		.then( res => {
			res.data.posts.edges.forEach((post, index) => {
				createPage({
					path: `/posts/${index}`,
					component: ({ title, content }) => {
						return title
					}
				})
			})
		})
}