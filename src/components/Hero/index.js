import React from 'react'
import Animation from '../Animation'
import Container from '../Container'

const Hero = ({ title, children, className, ...rest }) => (
	<Container className={className} {...rest}>
		<Animation type={`fadeInLeft`}>
			<h1 className={`jumbo`}>{title}</h1>
		</Animation>
		{children && (
			<Animation>
				{children}
			</Animation>
		)}
	</Container>
)

export default Hero
