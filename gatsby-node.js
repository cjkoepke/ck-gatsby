exports.createPages = async ({ actions: { createPage, createNode }, createNodeId, createContentDigest, graphql, reporter }) => {
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
		createPage({
			path: `/posts/${post.slug}`,
			component: require.resolve('./src/templates/Post'),
			context: {
				id: post.postId
			}
		})
	});
}
