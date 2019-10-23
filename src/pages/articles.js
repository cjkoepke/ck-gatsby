import React, { Fragment } from 'react';
import parse from 'html-react-parser'
import { graphql, useStaticQuery, Link } from 'gatsby';
import Hero from '../components/Hero'
import Container from '../components/Container'
import Section from '../components/Section'
import SEO from '../components/seo'
import Animation from "../components/Animation";

export default () => {
	const data = useStaticQuery( graphql`
		query GET_POSTS {
			allWordPress {
				posts {
					nodes {
						title
						excerpt
						slug
					}
				}
			}
		}
	` )

	const posts = data.allWordPress.posts.nodes
	return (
		<Fragment>
			<SEO title={`Articles`}/>
			<Section>
				<Hero title={`The Article Archives`}>
					<p>An archive of articles that are too long to fit into <Link to={`/feed`}>Feeds</Link>. Usually about software, but they can get pretty personal, too.</p>
				</Hero>
				<Container>
					<Animation>
						<ul>
							{posts && posts.map((post, index) => (
								<li key={post.slug}>
									<h3><Link to={`/article/${post.slug}`}>{parse(post.title)}</Link></h3>
									{parse(post.excerpt)}
								</li>
							))}
						</ul>
					</Animation>
				</Container>
			</Section>
		</Fragment>
	)
}
