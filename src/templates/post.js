import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout';
import SEO from '../components/seo';

export default ( { data: { allWordPress: { postBy: data } } } ) => {
	return (
		<Layout>
			<SEO title={data.yoast.title} description={data.yoast.desc}/>
			<article>
				<h2 dangerouslySetInnerHTML={{ __html: data.title }}></h2>
				<div dangerouslySetInnerHTML={{ __html: data.content}}>

				</div>
			</article>
		</Layout>
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
