import { graphql } from 'gatsby'
export const query = graphql`
	fragment Paragraph on WPGraphQLQuery_CoreParagraphBlock {
		name
		originalContent
		isValid
		attributes {
			... on WPGraphQLQuery_CoreParagraphBlockAttributesV3 {
				align
				className
			}
		}
	}
`
