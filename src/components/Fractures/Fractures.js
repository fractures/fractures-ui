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
			--fr-ground: ${ theme.colors.ground };
			--fr-focus: ${ theme.colors.focus };
			--fr-100: ${ theme.colors.shade100 };
			--fr-300: ${ theme.colors.shade300 };
			--fr-500: ${ theme.colors.shade500 };
			--fr-700: ${ theme.colors.shade700 };
			--fr-900: ${ theme.colors.shade900 };

			--fr-color-red: ${ theme.colors.red };
			--fr-color-green: ${ theme.colors.green };
			--fr-color-yellow: ${ theme.colors.yellow };

			--fr-font-mono: "Roboto Mono", monospace;
		}
	`

	return theme ? <style dangerouslySetInnerHTML={ { __html: themeCSS } } /> : null
}

Fractures.propTypes = propTypes
Fractures.defaultProps = defaultProps

export default Fractures
