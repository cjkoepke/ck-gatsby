exports.createPages = async ({ actions: { createPage, createNode }, createNodeId, createContentDigest, graphql, reporter }) => {
	const posts = await graphql(`
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

	if ( posts.errors ) {
		reporter.panic( 'Error loading posts.', posts.errors )
		return
	}

	posts.data.allWordPress.posts.nodes.forEach( post => {
		createPage({
			path: `/article/${post.slug}`,
			component: require.resolve('./src/templates/Article'),
			context: {
				id: post.postId
			}
		})
	})

	const categories = await graphql(`
		query {
			allWordPress {
				categories {
					nodes {
						categoryId
						name
						slug
						posts {
							nodes {
								title
								excerpt
								slug
							}
						}
					}
				}
			}
		}
	`)

	if ( categories.errors ) {
		reporter.panic( 'Error loading categories.', categories.errors )
	}

	categories.data.allWordPress.categories.nodes.forEach( cat => {
		createPage({
			path: `/category/${cat.slug}`,
			component: require.resolve('./src/templates/Category'),
			context: {
				posts: cat.nodes
			}
		})
	})
}
