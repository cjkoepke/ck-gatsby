import React, { Fragment } from "react"
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

// Polyfills
import '../../polyfills/intersection-observer'

// Components
import './styles.scss'
import Header from '../Header'

const Layout = ( { children, location } ) => {
	const data = useStaticQuery( graphql`
		query SiteTitleQuery {
			site {
				siteMetadata {
					title
				}
			}
		}
	`)

	return (
		<Fragment>
			<Header homePage={location.pathname === '/'} siteTitle={data.site.siteMetadata.title} />
			<main className={`main`}>
				{children}
			</main>
			<footer>
				© {new Date().getFullYear()}, Built with
				{` `}
				<a href="https://www.gatsbyjs.org">Gatsby</a>
			</footer>
		</Fragment>
	)
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Layout
