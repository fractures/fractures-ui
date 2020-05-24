import themes from '../config/themes'
import React from 'react'

const Helios = props => {
	const theme = themes.find(theme => props.theme === theme.name) || themes[0]

	// Colors
	const colors = Object.entries(theme.colors)
	const shades = colors.map((color, key) => {
		const colorName = colors[key][0]
		const colorShades = Object.entries(color[1])

		return colorShades.map(colorS => `--color-${ colorName }-${ colorS[0] }: ${ colorS[1] };`)
	})

	// Fonts
	const fonts = Object.entries(theme.fonts)
	const fontFamilies = fonts.map(font => {
		return `--font-${ font[0] }: ${ font[1] };`
	})

	const flatShades = shades.reduce((a, b) => a.concat(b)).reduce((a, b) => a.concat(b))
	const flatFontFamilies = fontFamilies.reduce((a, b) => a.concat(b))

	const themeCSS = `
		:root {
			${ flatShades }
			${ flatFontFamilies }
		}

		* {
			margin: 0;
			padding: 0;

			border: 0;
			box-sizing: border-box;
		}
	`

	return <style dangerouslySetInnerHTML={ { __html: themeCSS } } />
}

export default Helios
