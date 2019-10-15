import React, { Fragment, useEffect } from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import PropTypes from 'prop-types'
import Container from '../Container'
import ThemeSwitcher from '../ThemeSwitcher'
import './global.scss'

const SiteTitle = ({ path, children, ...rest }) =>
	'/' === path
		? <h1 {...rest}>{children}</h1>
		: <p {...rest}>{children}</p>

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


	useEffect(() => {
		let polyFillLoaded = false
		if ( 'undefined' === typeof window.IntersectionObserver && ! polyFillLoaded ) {
			import('intersection-observer').then(() => {
				polyFillLoaded = true
				console.log( 'Intersection Observer Polyfill successfully loaded.' )
			} )
		}
	})

	return (
		<Fragment>
			<header className={`header`}>
				<Container>
					<SiteTitle path={location.pathname} className={`site-title`}>
						<Link to="/">{data.site.siteMetadata.title}</Link>
					</SiteTitle>
					<Link to={`/posts`}>Posts</Link>
					<ThemeSwitcher/>
				</Container>
			</header>
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
