import React from 'react'
import Paragraph from './blocks/paragraph'

const blockMap = {
	'core/paragraph': Paragraph
}

const BlockRenderer = ({ block }) => {
	if ( blockMap[block.name] ) {
		const Block = blockMap[block.name]
		return <Block {...block}/>
	}

	return null
}

export default BlockRenderer
