import themes from "../../config/themes"
import PropTypes from "prop-types"
import React from "react"

const propTypes = {
	theme: PropTypes.oneOf(["blue", "black", "invert", "test"])
}

const defaultProps = {
	theme: null
}

// TODO @pyx Configuration should be explicit and more transparent; this is WIP.
const Fractures = props => {
	const theme = themes.find(theme => props.theme === theme.name)
	const themeCSS =
		theme &&
		`
		:root {
			--hl-ground: ${ theme.colors.ground };
			--hl-focus: ${ theme.colors.focus };
			--hl-100: ${ theme.colors.shade100 };
			--hl-300: ${ theme.colors.shade300 };
			--hl-500: ${ theme.colors.shade500 };
			--hl-700: ${ theme.colors.shade700 };
			--hl-900: ${ theme.colors.shade900 };

			--hl-color-red: ${ theme.colors.red };
			--hl-color-green: ${ theme.colors.green };
			--hl-color-yellow: ${ theme.colors.yellow };
			--hl-color-blue: ${ theme.colors.blue };

			--hl-font-mono: "Roboto Mono", monospace;
		}
	`

	return theme ? <style dangerouslySetInnerHTML={ { __html: themeCSS } } /> : null
}

Fractures.propTypes = propTypes
Fractures.defaultProps = defaultProps

export default Fractures
