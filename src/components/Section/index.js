import React from 'react'
import { section } from './styles.module.scss'

const Section = ({ children, className, ...rest }) => (
	<section {...rest} className={`${section} ${ className || '' }`}>
		{children}
	</section>
)

export default Section
