import React from 'react'
import { graphql } from 'gatsby'
import Index from '../components/Layouts'
import SEO from '../components/seo'
import Container from '../components/Container'
import Copy from '../components/Copy'
import Section from '../components/Section'

export default ( { data: { allWordPress: { postBy: data } } } ) => {
	return (
		<Index>
			<SEO title={data.yoast.title} description={data.yoast.desc}/>
			<Section>
				<Container>
					<article>
						<h2 dangerouslySetInnerHTML={{ __html: data.title }}></h2>
						<Copy>
							<div dangerouslySetInnerHTML={{ __html: data.content}}></div>
						</Copy>
					</article>
				</Container>
			</Section>
		</Index>
	)
}

export const query = graphql`
	query($id: Int!) {
		allWordPress {
			postBy(postId: $id) {
				title
				content
				yoast {
					desc
					title
				}
			}
		}
	}
`
