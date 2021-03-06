module.exports = {
  assetPrefix: `https://calvinkoepke.com`,
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@cjkoepke`,
    siteUrl: `https://calvinkoepke.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: 'gatsby-plugin-fathom',
      options: {
        trackingUrl: 'stats.calvinkoepke.com',
        siteId: 'SEQYV'
      }
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, wpgraphql: { generalSettings, posts }}}) => {
              return posts.nodes.map(post => ({
                title: post.title,
                description: post.excerpt,
                date: post.date,
                url: `${site.siteMetadata.siteUrl}/posts/${post.slug}`,
                guid: `${site.siteMetadata.siteUrl}/posts/${post.slug}`,
                custom_elements: [{ "content:encoded": `
                  ${post.excerpt}
                  <a href="${site.siteMetadata.siteUrl}/posts/${post.slug}">Read the Full Post</a>
                ` }]
              }))
            },
            query: `
              query {
                site {
                  siteMetadata {
                    siteUrl
                  }
                }
                wpgraphql {
                  generalSettings {
                    title
                    description
                  }
                  posts {
                    nodes {
                      date
                      slug
                      title
                      excerpt
                    }
                  }
                }
              }
            `,
            output: `/rss/posts.xml`,
            title: 'Posts RSS Feed'
          }
        ]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: "WPGraphQL",
        fieldName: "wpgraphql",
        url: process.env.WORDPRESS_SOURCE || `https://blog.calvinkoepke.com/graphql`,
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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `calvin-koepke`,
        short_name: `ck`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#2457f2`,
        display: `minimal-ui`,
        icon: `src/assets/images/logo-mark-transparent.png`,
      },
    },
  ],
}
