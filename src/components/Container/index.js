import React from 'react'
import './styles.scss'

const Container = ({ children, className, ...rest }) => (
	<div className={`container ${ className || '' }`} {...rest}>
		{children}
	</div>
)

export default Container
