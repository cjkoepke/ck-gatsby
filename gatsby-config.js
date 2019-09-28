require('dotenv').config({
	path: `.env.${ process.env.NODE_ENV }`,
})

module.exports = {
	siteMetadata: {
		title: `Calvin Koepke`,
		description: `Software Engineer + Entrepreneur`,
		author: `@cjkoepke`,
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-source-graphql`,
			options: {
				url: process.env.WORDPRESS_SOURCE,
				fieldName: 'allWordPress',
				typeName: 'WPGraphQLQuery',
				headers: {
					'Content-Type': 'application/json',
				}
			}
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Calvin Koepke`,
				short_name: `CK`,
				start_url: `/`,
				background_color: `#663399`,
				theme_color: `#663399`,
				display: `minimal-ui`,
				icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
			},
		},
	],
}
