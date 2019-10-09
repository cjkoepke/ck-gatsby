import { createGlobalStyle } from 'styled-components'
import { getColor } from '../helpers'
import { breakPoints as bp } from './variables'
import { transitionSpeed, transitionEase } from '../components/Animations'

export default createGlobalStyle` ${ ({ theme }) => `
	html {
		font-size: calc(8px + 0.75vw);
		
		@media only screen and (min-width: ${bp.lg}) {
			font-size: 20px;
		}
	}

	body {
		background: ${ getColor(theme, 'back') };
		color: ${ getColor(theme, 'text') };
		font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
		font-weight: 300;
		padding: 0;
		margin: 0;
		
		.wf-active & {
			font-family: proxima-nova, sans-serif;
		}
	}
	
	strong {
		font-weight: 700;
	}

	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		color: ${ getColor(theme, 'heading') };
		font-weight: 800;
		text-transform: uppercase;
		
		&.thin {
			font-weight: 200;
		}
		
		.wf-active & {
			font-family: novecento-sans-wide, sans-serif;
		}
	}
	
	h1 {
		font-size: 7.594rem;
	}
	
	h2 {
		font-size: 5.063rem;
	}
	
	h3 {
		font-size: 3.375rem;
	}
	
	h4 {
		font-size: 1.5rem;
	}
	
	h5,
	h6 {
		font-size: 1rem;
	}
	
	h4,
	h6 {
		font-weight: 200;
	}
	
	a {
		background-image: linear-gradient(to top, transparent 4px, ${ getColor(theme, 'primary') } 4px, ${ getColor(theme, 'primary') } 10px, transparent 10px );
		color: inherit;
		text-decoration: none;
		transition: color ${ transitionSpeed } ${ transitionEase };
		
		&:focus,
		&:hover {
			color: ${ getColor(theme, 'primary') };
		}
	}
`}`
