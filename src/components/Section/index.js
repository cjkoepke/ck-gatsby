import React from 'react'
import PropTypes from 'prop-types'
import styled, { css, ThemeConsumer } from 'styled-components'
import { getColor } from '../../helpers'
import { fadeInUp } from '../Animations'

const Section = ({ children, className, ...rest }) => (
	<ThemeConsumer>
		{state => (
			<section {...rest} className={`${state.mode} ${className}`}>
				{children}
			</section>
		)}
	</ThemeConsumer>
)

export default styled(Section)`
	${ ({ theme }) => css`
		animation: ${fadeInUp};
		background: ${ getColor(theme, 'middle') };
		padding: 40px;
	` }
`
