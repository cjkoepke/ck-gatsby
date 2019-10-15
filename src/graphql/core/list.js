import { graphql } from 'gatsby'
export const query = graphql`
	fragment List on WPGraphQLQuery_CoreListBlock {
		name
		originalContent
		isValid
		attributes {
			ordered
		}
	}
`
