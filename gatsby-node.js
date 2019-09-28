exports.createPages = async ({ actions, graphql, reporter }) => {
	const { data, ...results } = await graphql(`
		query {
			allWordPress {
				posts {
					nodes {
						postId
						slug
					}
				}
			}
		}
	`)

	if ( results.errors ) {
		reporter.panic( 'Error loading posts.', results.errors );
		return;
	}

	data.allWordPress.posts.nodes.forEach( post => {
		actions.createPage({
			path: `/posts/${post.slug}`,
			component: require.resolve('./src/templates/post.js'),
			context: { id: post.postId }
		})
	});
}
