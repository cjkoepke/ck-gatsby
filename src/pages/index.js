import React, { Fragment } from "react"
import SEO from '../components/seo'
import HomeHero from '../components/HomeHero'

const IndexPage = () => (
	<Fragment>
		<SEO title="Home"/>
		<HomeHero/>
	</Fragment>
)

export default IndexPage
