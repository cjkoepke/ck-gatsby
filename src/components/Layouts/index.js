/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
import React, { useState } from "react"
import PropTypes from 'prop-types'
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from '../../styles/global'
import { useStaticQuery, graphql } from 'gatsby'

// Polyfills
import '../../polyfills/intersection-observer'

// Components
import colors from '../../helpers/colors'
import Section from '../Section'
import Header from '../Header'


const ToggleTheme = styled.button`
	
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
				<Section>
					{children}
				</Section>
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
