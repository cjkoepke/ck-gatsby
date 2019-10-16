import React, { useRef, useEffect } from 'react'
import './styles.scss'

const Animation = ({ children, type = 'fadeInUp', className, style, ...rest }) => {
	return (
		<div className={`${type} ${className}`} {...rest}>
			{children}
		</div>
	)
}

export default Animation
