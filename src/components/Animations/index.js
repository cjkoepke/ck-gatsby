import { css, keyframes } from 'styled-components'

export const transitionEase = `ease-in-out`
export const transitionSpeed = `.765s`

const fadeInUpKeyframes = keyframes`
	from {
		opacity: 0;
		transform: translateY(60px);
	}
	to {
		opacity: 1;
		transform: translateY(0);
	}
`

export const fadeInUp = css`
	${fadeInUpKeyframes} ${transitionSpeed} ${transitionEase};
	will-change: opacity, transform;
`
