import themes from "../../config/themes"
import PropTypes from "prop-types"
import React from "react"

const propTypes = {
	theme: PropTypes.oneOf(["blue", "black", "invert", "test"])
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

	const themeCSS = `
		:root {
			${ shades.flat(2).join("\n") }
			${ fontFamilies.flat().join("\n") }
		}
	`

	return <style dangerouslySetInnerHTML={ { __html: themeCSS } } />
}

Helios.propTypes = propTypes
Helios.defaultProps = defaultProps

export default Helios
