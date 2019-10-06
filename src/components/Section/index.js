import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { getColor } from '../../helpers'
import { fadeInUp } from '../Animations'

const Section = ({ children, ...rest }) => (
	<section {...rest}>
		{children}
	</section>
)

export default styled(Section)`
	${ ({ theme }) => css`
		animation: ${fadeInUp};
		background: ${ getColor(theme, 'white') };
		color: ${ getColor(theme, 'black') };
		padding: 40px;
	` }
`
