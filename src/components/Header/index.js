import React, { useEffect, useRef } from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import Container from '../Container'
import './styles.scss'

const Header = ( { siteTitle, homePage } ) => {
	const toggleTheme = useRef(null)

	useEffect(() => {
		toggleTheme.current.addEventListener('click', e => {
			e.preventDefault();
			document.querySelector('html').classList.toggle( 'dark-theme' )
		})
	})

	const Tag = homePage ? 'h1' : 'p'

	return (
		<header className={`header`}>
			<Container>
				<Tag className={`site-title`}><Link to="/">{siteTitle}</Link></Tag>
				<Link to={`/posts`}>Posts</Link>
				<button ref={toggleTheme}>Toggle Theme</button>
			</Container>
		</header>
	)
}

Header.propTypes = {
	siteTitle: PropTypes.string,
}

Header.defaultProps = {
	siteTitle: ``,
}

export default Header
