import React from 'react'
import { CSSTransition } from 'react-transition-group'
import { useInView } from 'react-intersection-observer'

const Animation = ({ children, ...rest }) => {
	const [ref, inView] = useInView()
	return (
		<div ref={ref} {...rest}>
			<CSSTransition timeout={465} in={inView} classNames={`fadeInUp`}>
				{children}
			</CSSTransition>
		</div>
	)
}

export default Animation
