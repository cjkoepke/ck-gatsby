import React from 'react'
import styled from 'styled-components'

const StyledCopy = styled.div`
	font-size: 1.25rem;
	padding: 0 10%;
`

const Copy = ({ children, ...rest }) => (
	<StyledCopy {...rest}>
		{children}
	</StyledCopy>
)

export default Copy
