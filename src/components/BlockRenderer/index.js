import React from 'react'
import Paragraph from './blocks/paragraph'
import List from './blocks/list'
import Animation from "../Animation";

const blockMap = {
	'core/paragraph': Paragraph,
	'core/list': List
}

const BlockRenderer = ({ block }) => {
	if ( blockMap[block.name] && block.isValid ) {
		const Block = blockMap[block.name]
		return <Block {...block}/>
	}

	return null
}

export default BlockRenderer
