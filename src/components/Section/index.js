import React from 'react'
import Animation from '../../components/Animation'
import './styles.scss'

const Section = ({ children, className, ...rest }) => (
	<section className={`section ${ className || '' }`} {...rest}>
		{children}
	</section>
)

export default Section
