/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
import React, { useState } from "react"
import PropTypes from 'prop-types'
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from '../styles/global'
import { useStaticQuery, graphql } from 'gatsby'

// Polyfills
import '../polyfills/intersection-observer'

import Header from './header'

const ToggleTheme = styled.button`
	
`

const Layout = ( { children } ) => {
	const data = useStaticQuery( graphql`
		query SiteTitleQuery {
			site {
				siteMetadata {
					title
				}
			}
		}
	`)

	const [theme, setTheme] = useState({
		'light' : {
			'black': '#0A1538',
			'blue': '#2457F2',
			'grey-1': '#DCE0EF',
			'grey-2': '#F4F6F9',
			'white': '#FFF'
		},
		'dark': {
			'black': '#fff',
			'blue': '#2457F2',
			'grey-1': '#F4F6F9',
			'grey-2': '#DCE0EF',
			'white': '#0A1538'
		}
	})

	const handleToggleTheme = () => {
		setTheme(( { light, dark }) => ({
			light: dark,
			dark: light
		}))
	}

	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<ToggleTheme onClick={handleToggleTheme}>Toggle Theme</ToggleTheme>
			<Header siteTitle={data.site.siteMetadata.title} />
			<main>
				{children}
			</main>
			<footer>
				© {new Date().getFullYear()}, Built with
				{` `}
				<a href="https://www.gatsbyjs.org">Gatsby</a>
			</footer>
		</ThemeProvider>
	)
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Layout
