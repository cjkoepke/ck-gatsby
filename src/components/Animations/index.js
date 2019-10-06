import { css, keyframes } from 'styled-components'

export const transitionEase = `ease-in-out`
export const transitionSpeed = `.765s`

const fadeInUpKeyframes = keyframes`
	from {
		opacity: 0;
		transform: translate3d(0,60px,0);
	}
	to {
		opacity: 1;
		transform: translate(0,0,0);
	}
`

export const fadeInUp = css`
	${fadeInUpKeyframes} ${transitionSpeed} ${transitionEase};
`
