import { themes } from "../config/themes"
import Button from "./Button"
import fractures from "fractures"
import React from "react"

const Fractures = props => {
	const isThemed = props.theme
	const theme = (isThemed && themes.find(theme => props.theme === theme.name)) || null

	const themeRoot = theme && (
		<style jsx global>{`
			:root {
				--fr-ground: ${ theme.colors.ground };
				--fr-focus: ${ theme.colors.focus };
				--fr-100: ${ theme.colors.shade100 };
				--fr-300: ${ theme.colors.shade300 };
				--fr-500: ${ theme.colors.shade500 };
				--fr-700: ${ theme.colors.shade700 };
				--fr-900: ${ theme.colors.shade900 };
			}
		`}</style>
	)

	return (
		<div>
			<style jsx global>
				{fractures}
			</style>
			{isThemed && theme ? themeRoot : null}
		</div>
	)
}

export default Fractures
