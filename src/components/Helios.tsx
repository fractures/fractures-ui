import themes from '../config/themes'
import PropTypes from 'prop-types'
import React from 'react'

const propTypes = {
	theme: PropTypes.oneOf(['blue', 'black', 'invert', 'test'])
}

const defaultProps = {
	theme: null
}

// NOTE This is still WIP
// TODO Enable custom themes, finalize structure.

// Parsing themes to be able to inject them to :root.
const Helios = props => {
	const theme = themes.find(theme => props.theme === theme.name)

	if(!theme) return null

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

		h1 {
			font-size: 2.25rem;
			line-height: 2.8125rem;
		}

		h2 {
			font-size: 1.75rem;
			line-height: 2.1875rem;
		}

		h3 {
			font-size: 1.5rem;
			line-height: 1.875rem;
		}

		h4 {
			font-size: 1.25rem;
			line-height: 1.5625rem;
		}

		h5 {
			font-size: 1.125rem;
			line-height: 1.375rem;
		}

		h6 {
			font-size: 1rem;
			line-height: 1.25rem;
		}

		hr {
			border: 0;
			border-bottom: 1px solid var(--color-gray-300);
		}

		p {
			font-size: 1rem;
			line-height: 1.5rem;
		}

		p a {
			font-weight: 700;
			text-decoration: underline;
		}

		p cite {
			background-color: var(--color-yellow-500);
		}

		a {
			color: var(--color-gray-500);
			font-weight: 700;

			&:hover {
				color: var(--color-gray-900);
			}
		}

		code {
			color: var(--color-gray-700);

			font-size: ${ props => (props.isSmall ? '0.75rem' : '1rem;') };
			font-family: var(--font-mono);
			line-height: 1rem;
		}
	`

	return <style dangerouslySetInnerHTML={ { __html: themeCSS } } />
}

Helios.propTypes = propTypes
Helios.defaultProps = defaultProps

export default Helios
