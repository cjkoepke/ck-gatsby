import React, { Fragment } from 'react'
import { graphql, Link } from 'gatsby'
import parse from 'html-react-parser'
import SEO from '../../components/seo'
import Section from '../../components/Section'
import Container from '../../components/Container'
import BlockRenderer from '../../components/BlockRenderer'
import Animation from '../../components/Animation'
import Hero from '../../components/Hero'
import './styles.scss'

export default ( { data: { allWordPress: { postBy: data } } } ) => {
	const title = parse( data.title )

	return (
		<Fragment>
			<SEO title={data.yoast.title} description={data.yoast.desc}/>
			<Section>
				<Hero className={`hero--article`} title={title}/>
				<Container className={`post-wrap`}>
					<div className={`post-meta`}>
						{data.categories && data.categories.nodes && (
							<div className={`post-meta__box`}>
								<p className={`post-meta__box__title`}><string>Categories:</string></p>
								<ul className={`post-meta__box__list`}>
									{data.categories.nodes.map(cat => (
										<li key={cat.name}><Link to={`/category/${cat.slug}`}>{cat.name}</Link></li>
									))}
								</ul>
							</div>
						)}
					</div>
					<Animation>
						<Section className={`top post-body`}>
							{data.blocks && data.blocks.map((block, index) => (
								<BlockRenderer key={`${block.name}-${index}`} block={block}/>
							))}
						</Section>
					</Animation>
				</Container>
			</Section>
		</Fragment>
	)
}

export const query = graphql`
	query($id: Int!) {
		allWordPress {
			postBy(postId: $id) {
				title
				categories {
					nodes {
						name
						slug
					}
				}
				blocks {
					...Paragraph
					...List
				}
				yoast {
					desc
					title
				}
			}
		}
	}
`
