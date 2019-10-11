import React, { Fragment } from "react"
import SEO from '../components/seo'
import Container from '../components/Container'
import Section from '../components/Section'

const IndexPage = () => (
  <Fragment>
    <SEO title="Home" />
    <Section>
	    <Container>
			<h1>Hi people</h1>
	    </Container>
    </Section>
  </Fragment>
)

export default IndexPage
