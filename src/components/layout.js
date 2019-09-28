/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
import React, { useEffect } from "react"
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors } from '../styles/colors'
import { useStaticQuery, graphql } from 'gatsby'
import polyFillIO from '../polyfills/intersection-observer'

import Header from './header'

const getColorVars = colors => {
	const keys = Object.keys( colors );
	return keys.reduce(( string, key ) => {
		string += `--color-${key}: ${colors[key]};`
		return string;
	}, ``);
}

const LayoutWrap = styled.div`
	${getColorVars( colors )}
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

	useEffect(() => {
		polyFillIO();
	})

	return (
		<LayoutWrap>
			<Header siteTitle={data.site.siteMetadata.title}/>
			<main>{children}</main>
			<footer>
				© {new Date().getFullYear()}, Built with
				{` `}
				<a href="https://www.gatsbyjs.org">Gatsby</a>
			</footer>
		</LayoutWrap>
	)
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Layout
