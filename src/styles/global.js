import { createGlobalStyle } from 'styled-components'
import { getColor } from '../helpers'

export default createGlobalStyle`
	body {
		background: ${ ({ theme }) => getColor(theme, 'grey_1') };
		color: ${ ({ theme }) => getColor(theme, 'black') };
		font-family: paralucent-text, sans-serif;
		font-weight: 400;
	}

	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		font-family: paralucent, sans-serif;
		font-weight: 700;
	}
`
