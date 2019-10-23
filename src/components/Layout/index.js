import React, { Fragment, useEffect } from 'react'
import PropTypes from 'prop-types'
import Header from '../Header'
import ThemeSwitcher from '../ThemeSwitcher'
import '../../styles/normalize.css'
import '../../styles/scss/global.scss'

const Layout = ( { children, location } ) => {
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
			<ThemeSwitcher/>
			<Header path={location.pathname}/>
			<main className={`main`}>
				{children}
			</main>
			<footer>
				© {new Date().getFullYear()}, Built with <a href="https://www.gatsbyjs.org">Gatsby</a>
			</footer>
		</Fragment>
	)
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Layout
