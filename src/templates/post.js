import React from 'react'
import { graphql } from 'gatsby'
import Index from '../components/Layouts';
import SEO from '../components/seo';

export default ( { data: { allWordPress: { postBy: data } } } ) => {
	return (
		<Index>
			<SEO title={data.yoast.title} description={data.yoast.desc}/>
			<article>
				<h2 dangerouslySetInnerHTML={{ __html: data.title }}></h2>
				<div dangerouslySetInnerHTML={{ __html: data.content}}>

				</div>
			</article>
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
