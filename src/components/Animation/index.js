import React from 'react'
import { CSSTransition } from 'react-transition-group'
import { useInView } from 'react-intersection-observer'
import './styles.scss'

const Animation = ({ children, ...rest }) => {
	const [ref, inView] = useInView()
	return (
		<div ref={ref}>
			<CSSTransition appear={true} classNames={`fadeInUp`} in={inView} {...rest}>
				{children}
			</CSSTransition>
		</div>
	)
}

export default Animation
