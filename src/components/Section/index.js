import React from 'react'
import './styles.scss'

const Section = ({ children, className, ...rest }) => (
	<section className={`section ${ className || '' }`} {...rest}>
		{children}
	</section>
)

export default Section
