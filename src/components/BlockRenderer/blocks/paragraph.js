import React from 'react'
import parse from 'html-react-parser'

const Paragraph = ({ originalContent }) => {
	return parse( originalContent )
}

export default Paragraph
