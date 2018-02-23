import React, { Component, Fragment } from "react"
import Color from "./shared/Color"

// Default themes
const themes = [
	{
		name: "blue",
		colors: {
			ground: "#fff",
			shade100: "#e8f2fd",
			shade300: "#76a7e7",
			shade500: "#3482da",
			shade700: "#2463a5",
			shade900: "#102a45",
			focus: "rgba(52, 130, 218, 0.4)"
		}
	},
	{
		name: "black",
		colors: {
			ground: "#fff",
			shade100: "#eee",
			shade300: "#919191",
			shade500: "#666666",
			shade700: "#484848",
			shade900: "#111",
			focus: "rgba(102, 102, 102, 0.5)"
		}
	},
	{
		name: "invert",
		colors: {
			ground: "#111",
			shade100: "#303030",
			shade300: "#696969",
			shade500: "#888888",
			shade700: "#a9a9a9",
			shade900: "#eee",
			focus: "rgba(136, 136, 136, 0.5)"
		}
	},
	{
		name: "test",
		colors: {
			ground: "#caffb8",
			shade100: "#92dfb4",
			shade300: "#4e999d",
			shade500: "#437684",
			shade700: "#3c5564",
			shade900: "#1d1d1f",
			focus: "rgba(67, 118, 132, 0.5)"
		}
	}
]

class Fractures extends Component {
	render() {
		const theme = (themes.find(theme => this.props.theme === theme.name) || themes[0]).colors
		const meta = (
			<div className="flex">
				{Object.keys(theme).map((color, key) => (
					<Color key={ key } hex={ theme[color] } change={ e => this.updateColor(e) } />
				))}
			</div>
		)

		return (
			<Fragment>
				{this.props.meta && meta}
				<style jsx global>{`
					:root {
						--fr-ground: ${ theme.ground };
						--fr-focus: ${ theme.focus };
						--fr-100: ${ theme.shade100 };
						--fr-300: ${ theme.shade300 };
						--fr-500: ${ theme.shade500 };
						--fr-700: ${ theme.shade700 };
						--fr-900: ${ theme.shade900 };
					}
				`}</style>
			</Fragment>
		)
	}
}

export default Fractures
