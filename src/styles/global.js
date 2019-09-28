import { colors } from '../styles/colors'
import normalize from '../styles/normalize'
import { createGlobalStyle } from 'styled-components'

const getColorVars = colors => {
	const keys = Object.keys( colors );
	return keys.reduce(( string, key ) => {
		string += `--color-${key}: ${colors[key]};`
		return string;
	}, ``);
}

