import React, { Component, Fragment } from "react"
import Color from "./shared/Color"

// Default themes
const themes = [
	{
		name: "blue",
		colors: ["white", "#e8f2fd", "#aecdf2", "#76a7e7", "#3482da", "#2463a5", "#184673", "#102a45"]
	},
	{
		name: "black",
		colors: ["white", "#eeeeee", "#bebebe", "#919191", "#666666", "#484848", "#2c2c2c", "#111111"]
	},
	{
		name: "invert",
		colors: ["#111", "#303030", "#4c4c4c", "#696969", "#888888", "#a9a9a9", "#cbcbcb", "#eeeeee"]
	},
	{
		name: "test",
		colors: ["#caffb8", "#92dfb4", "#67bdad", "#4e999d", "#437684", "#3c5564", "#303741", "#1d1d1f"]
	}
]

class Fractures extends Component {

	// TODO
	updateColor() {}

	render() {
		const theme = (themes.find(theme => this.props.theme === theme.name) || themes[0]).colors
		const meta = (
			<div className="flex">
				{theme.map((color, key) => <Color key={ key } hex={ color } change={ e => this.updateColor(e) } />)}
			</div>
		)

		return (
			<Fragment>
				{this.props.meta && meta}
				<style jsx global>{`
					:root {
						--shade-0: ${ theme[0] };
						--shade-1: ${ theme[1] };
						--shade-2: ${ theme[2] };
						--shade-3: ${ theme[3] };
						--shade-4: ${ theme[4] };
						--shade-5: ${ theme[5] };
						--shade-6: ${ theme[6] };
						--shade-7: ${ theme[7] };
					}
				`}</style>
			</Fragment>
		)
	}
}

export default Fractures
