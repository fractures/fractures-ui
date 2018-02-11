import { Component } from "react"
import cc from "classcat"

const defaultProps = {
	hex: "",
	name: ""
}

class Color extends Component {
	render() {
		const colorClasses = cc({
			"grow-1 p-2 nowrap": true,
			white: this.props.name === 4
		})

		return (
			<small className={ colorClasses } style={ { backgroundColor: this.props.hex } }>
				<b className="nowrap block">{this.props.name}</b>
				<span className="opacity-50">{this.props.hex}</span>
			</small>
		)
	}
}

export default Color
