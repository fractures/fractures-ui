import React, { Component } from "react"

class Color extends Component {
	render() {
		return (
			<small className="fr-color grow-1 p-2 nowrap white" style={ { backgroundColor: this.props.hex } }>
				<b>{this.props.name}</b>
				<br />
				<small>{this.props.hex}</small>
				<style jsx>{`
					.fr-color {
						text-shadow: 0 1px 0 rgba(0, 0, 0, 0.2);
					}
				`}</style>
			</small>
		)
	}
}

export default Color
