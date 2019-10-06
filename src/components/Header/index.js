import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { getColor } from '../../helpers'

const StyledHeader = styled.header`
	background: ${ ({ theme }) => getColor(theme, 'grey_1') };
	margin: 0 auto;
	maxWidth: 960;
	padding: 1.45rem 1.0875rem;
	
	a {
		color: ${ ({ theme }) => getColor(theme, 'black')};
		text-decoration: none;
	}
`

const Index = ( {siteTitle} ) => (
	<StyledHeader>
		<h1><Link to="/">{siteTitle}</Link></h1>
		<Link to={`/posts`}>Posts</Link>
	</StyledHeader>
)

Index.propTypes = {
	siteTitle: PropTypes.string,
}

Index.defaultProps = {
	siteTitle: ``,
}

export default Index
