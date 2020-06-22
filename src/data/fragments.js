import { graphql } from "gatsby"

export const GeneralSettings = graphql`
  fragment GeneralSettings on WPGraphQL {
    generalSettings {
      title
      description
      url
    }
  }
`

export const Paragraph = graphql`
  fragment Paragraph on WPGraphQL_CoreParagraphBlock {
    attributes {
      ... on WPGraphQL_CoreParagraphBlockAttributes {
        content
        dropCap
        fontSizeInt: fontSize
      }
      ... on WPGraphQL_CoreParagraphBlockAttributesV2 {
        content
        dropCap
        fontSizeString: fontSize
      }
      ... on WPGraphQL_CoreParagraphBlockAttributesV3 {
        content
        dropCap
        fontSize
      }
    }
  }
`

export const Image = graphql`
  fragment Image on WPGraphQL_CoreImageBlock {
    attributes {
      alt
      url
      align
      sizeSlug
      className
      localFile {
        childImageSharp {
          fluid(maxWidth: 768) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
          large: fluid(maxWidth: 1024) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
          medium: fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
          thumbnail: fluid(maxWidth: 150) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  }
`

export const Heading = graphql`
  fragment Heading on WPGraphQL_CoreHeadingBlock {
    attributes {
      content
      level
    }
  }
`

export const Button = graphql`
  fragment Button on WPGraphQL_CoreButtonBlock {
    attributes {
      url
      text
    }
  }
`

export const List = graphql`
  fragment List on WPGraphQL_CoreListBlock {
    attributes {
      values
      ordered
    }
  }
`

export const Blockquote = graphql`
  fragment Blockquote on WPGraphQL_CoreQuoteBlock {
    attributes {
      align
      citation
      value
    }
  }
`

export const Code = graphql`
  fragment Code on WPGraphQL_CoreCodeBlock {
    attributes {
      nonNullContent: content
      className
    }
  }
`

export const AllBlocks = graphql`
  fragment AllBlocks on WPGraphQL_Block {
    name
    ...Paragraph
    ...Heading
    ...Button
    ...Image
    ...List
    ...Blockquote
    ...Code
  }
`
