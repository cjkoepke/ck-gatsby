import React, { useState } from "react"
import PropTypes from 'prop-types'
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from '../../styles/global'
import { useStaticQuery, graphql } from 'gatsby'

// Polyfills
import '../../polyfills/intersection-observer'

// Components
import colors from '../../helpers/colors'
import Header from '../Header'

const ToggleTheme = styled.button`
	position: fixed;
	right: 0;
	top: 0;
`

const Index = ( { children } ) => {
	const data = useStaticQuery( graphql`
		query SiteTitleQuery {
			site {
				siteMetadata {
					title
				}
			}
		}
	`)

	const [mode, setMode] = useState('light')

	const handleDarkMode = () => {
		setMode(prev => 'light' === prev ? 'dark' : 'light')
	}

	return (
		<ThemeProvider theme={{ colors, mode }}>
			<GlobalStyles />
			<ToggleTheme onClick={handleDarkMode}>Dark Mode</ToggleTheme>
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

Index.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Index
