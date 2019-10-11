import React from 'react'
import './styles.scss'

const Section = ({ children, className, ...rest }) => (
	<section {...rest} className={`section ${ className || '' }`}>
		{children}
	</section>
)

export default Section
