import React from 'react'
import './styles.scss'

const Animation = ({ delay, children, className, ...rest }) => (
	<div className={`fadeInUp ${className || ''}`} style={{ animationDelay: `${delay}s` }} {...rest}>
		{children}
	</div>
)

export default Animation
