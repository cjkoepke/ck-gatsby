import React, { Fragment, useEffect } from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import PropTypes from 'prop-types'
import Container from '../Container'
import ThemeSwitcher from '../ThemeSwitcher'
import './global.scss'
import logo from '../../images/logo-type.svg'

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
			allWordPress {
				menus(where: {location: HEADER}) {
					nodes {
						menuId
						menuItems {
							nodes {
								label
								url
								target
							}
						}
					}
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

	const menu = data.allWordPress.menus.nodes

	return (
		<Fragment>
			<header className={`header`}>
				<Container>
					<SiteTitle path={location.pathname} className={`site-title`}>
						<Link to="/">
							<img className={`site-logo`} alt={data.site.siteMetadata.title} src={logo}/>
							<span className={`screen-reader-text`}>
								{data.site.siteMetadata.title}
							</span>
						</Link>
					</SiteTitle>
					{menu && menu.map(node => (
						<nav key={node.menuId} className={`menu-header`}>
							<ul>
								{node.menuItems.nodes && node.menuItems.nodes.map(item => (
									<li key={item.label}>
										{null !== item.target
											? (
												<a href={item.url} target={item.target}>
													{item.label}
												</a>
											) : (
												<Link to={item.url}>
													{item.label}
												</Link>
											)}
									</li>
								))}
							</ul>
						</nav>
					))}
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
