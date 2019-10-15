import React from 'react'
import parse from 'html-react-parser'

const List = ({ originalContent }) => {
	return parse( originalContent )
}

export default List
