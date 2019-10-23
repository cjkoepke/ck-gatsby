import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Container from '../Container'
import Logo from '../../images/svg/inline/logo-type.svg'
import './styles.scss'

/**
 * Generate site title tag based on path.
 * @param path
 * @param children
 * @param rest
 * @returns {*}
 * @constructor
 */
const SiteTitle = ({ path, children, ...rest }) => {
	if ( '/' === path ) {
		return <h1 {...rest}>{children}</h1>
	}

	return <p {...rest}>{children}</p>
}

/**
 * Main Header component.
 * @returns {*}
 * @constructor
 */
const Header = ({ path }) => {

	const data = useStaticQuery( graphql`
		query Header {
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

	const menu = data.allWordPress.menus.nodes

	return (
		<header className={`header`}>
			<Container>
				<SiteTitle path={path} className={`site-title`}>
					<Link to="/">
						<Logo className={`site-logo`}/>
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
											<Link activeClassName={`active`} to={item.url}>
												{item.label}
											</Link>
										)}
								</li>
							))}
						</ul>
					</nav>
				))}
			</Container>
		</header>
	)
}

export default Header
