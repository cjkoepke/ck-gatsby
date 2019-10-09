import React from 'react'
import styled from 'styled-components'
import { breakPoints as bp } from '../../styles/variables'

const StyledContainer = styled.div`
	${ Object.keys( bp ).map( breakpoint => `
		@media only screen and (min-width: ${ bp[breakpoint] }) {
			margin: 0 auto;
			max-width: ${ parseInt( bp[breakpoint] ) - 40 }px;
			width: 100%;
		}
	`) }
`

const Container = ({ children, ...rest }) => (
	<StyledContainer {...rest}>
		{children}
	</StyledContainer>
)

export default Container
