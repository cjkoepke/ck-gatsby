import React from 'react'
import Hero from '../Hero'
import Section from '../Section'
import profile from '../../images/calvin-koepke-profile.jpg'
import './styles.scss'

const HomeHero = () => (
	<Section>
		<Hero className={`hero--home`} title={`Hello 👋`}>
			<div className={`lead`}>
				<p>I'm an entrepreneur and Sr. Frontend Engineer at <a href={`https://10up.com`} rel={`noreferrer noopener`} target={`_blank`}>10up</a>.</p>
				<p>I'm a full-stack engineer specializing in WordPress, JavaScript, and Software Architecture.</p>
			</div>
		</Hero>
	</Section>
)

export default HomeHero
