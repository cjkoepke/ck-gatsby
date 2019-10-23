import React, { Fragment } from 'react'
import { Link } from 'gatsby'
import SEO from '../components/seo'
import Section from '../components/Section'
import Hero from '../components/Hero'

const NotFoundPage = () => (
  <Fragment>
    <SEO title="404: Not found" />
    <Section>
	    <Hero title={`Danget, I actuall broke something.`}>
		    <p>...or you did. Doesn't matter, though! <Link to={`/`}>Just start over</Link>.</p>
	    </Hero>
    </Section>
  </Fragment>
)

export default NotFoundPage
