import { themes } from "../src/config/themes"
import React from "react"

// TODO Use kit library, when it works
// TODO Fix themeing

const theme = themes[0]
const themeCSS = `
	:root {
		--fr-ground: ${ theme.colors.ground };
		--fr-focus: ${ theme.colors.focus };
		--fr-100: ${ theme.colors.shade100 };
		--fr-300: ${ theme.colors.shade300 };
		--fr-500: ${ theme.colors.shade500 };
		--fr-700: ${ theme.colors.shade700 };
		--fr-900: ${ theme.colors.shade900 };
	}

	// .examples-frame > * { margin: .5rem; }
`

const Fractures = props => (
	<div className="examples-frame">
		<link href="https://unpkg.com/fractures@1.3.0/dist/fractures.prefixed.min.css" rel="stylesheet" />
		<style dangerouslySetInnerHTML={ { __html: themeCSS } } />
		{props.children}
	</div>
)

export default Fractures
