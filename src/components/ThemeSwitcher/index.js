import React, { useEffect, useRef } from 'react'
import Cookies from 'js-cookie'
import './styles.scss'

const ThemeSwitcher = () => {

	const toggleTheme  = useRef(null)
	const currentTheme = Cookies.get( 'theme' )

	useEffect(() => {
		const html = document.querySelector('html')

		if ( ! currentTheme ) {
			Cookies.set( 'theme', 'light' )
		}

		if ( 'dark' === currentTheme ) {
			html.classList.add( 'dark-theme' )
		}

		toggleTheme.current.addEventListener('click', e => {
			e.preventDefault()
			const theme = e.target.getAttribute( 'data-theme' )
			Cookies.set( 'theme', theme );

			if ( 'dark' === theme ) {
				html.classList.add( 'dark-theme' )
			} else {
				html.classList.remove( 'dark-theme' )
			}
		})

	}, [toggleTheme, currentTheme] )

	return (
		<div className={`theme-group`} ref={toggleTheme}>
			<button className={'light' === currentTheme ? 'active' : ''} data-theme={`light`}>Light</button>
			<button className={'dark' === currentTheme ? 'active' : ''} data-theme={`dark`}>Dark</button>
		</div>
	)
}

export default ThemeSwitcher
