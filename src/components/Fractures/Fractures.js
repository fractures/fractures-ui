import { themes } from "../../config/themes"
import { UniversalStyle as Style } from "react-css-component"
import fractures from "fractures"
import PropTypes from "prop-types"
import React, { Fragment } from "react"

const propTypes = {
	theme: PropTypes.oneOf(["blue", "black", "invert", "test"])
}

const defaultProps = {
	theme: null
}
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
			}
	`

	return (
		<Fragment>
			<Style css={ fractures } />
			{theme && themeCSS && <Style css={ themeCSS } />}
		</Fragment>
	)
}

Fractures.propTypes = propTypes
Fractures.defaultProps = defaultProps

export default Fractures
