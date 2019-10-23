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
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-sass`,
			options: {
				includePaths: [
					'src/styles/scss'
				]
			}
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},
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
				icon: `src/images/calvin-koepke-profile.jpg`,
			},
		},
		{
			resolve: "gatsby-plugin-react-svg",
			options: {
				rule: {
					include: /svg\/inline/
				}
			}
		},
		{
			resolve: `gatsby-plugin-layout`,
			options: {
				component: require.resolve(`./src/components/Layout`),
			},
		},
		{
			resolve: 'gatsby-plugin-web-font-loader',
			options: {
				typekit: {
					id: 'nxj2ics'
				}
			}
		},
	],
}
