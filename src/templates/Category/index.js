import React, { Fragment } from 'react'
import { graphql, Link } from 'gatsby'
import parse from 'html-react-parser'
import SEO from '../../components/seo'
import Section from '../../components/Section'
import Container from '../../components/Container'
import BlockRenderer from '../../components/BlockRenderer'
import Animation from '../../components/Animation'
import './styles.scss'

export default ( data ) => {
	const title = parse( data.title )
	return (
		<Fragment>
			<SEO title={data.yoast.title} description={data.yoast.desc}/>
			<Section>
				<article>
					<Container>
						<div className={`post-wrap`}>
							<div className={`post-meta`}>
								<h1 className={`post-title`}>{title}</h1>
								<hr/>
								<h4 className={`subtitle`}>Categories</h4>
								<ul className={`categories`}>
									{data.categories && data.categories.nodes && data.categories.nodes.map(cat => (
										<li key={cat.name}><Link to={`/category/${cat.slug}`}>{cat.name}</Link></li>
									))}
								</ul>
							</div>
							<Animation>
								<div className={`post-body`}>
									{data.blocks && data.blocks.map((block, index) => (
										<BlockRenderer key={`${block.name}-${index}`} block={block}/>
									))}
								</div>
							</Animation>
						</div>
					</Container>
				</article>
			</Section>
		</Fragment>
	)
}
