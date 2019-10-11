import React from "react"
import { Link } from "gatsby"

import Layout from '../components/Layout'
import Image from '../components/image'
import SEO from '../components/seo'
import Container from '../components/Container'
import Section from '../components/Section'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Section>
	    <Container>
			<h1>Hi people</h1>
	    </Container>
    </Section>
  </Layout>
)

export default IndexPage
