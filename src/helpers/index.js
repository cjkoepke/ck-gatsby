/**
 * Get a color from the theme by key
 * @param theme
 * @param key
 * @returns {*|boolean}
 */
export const getColor = (theme, key) => {
	return theme.colors[theme.mode][key] || false
}
