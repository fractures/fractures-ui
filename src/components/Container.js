import React, { Component } from "react"

class Container extends Component {
	render() {
		return (
			<div className={ `fr-container mx-auto ${ this.props.className ? `${ this.props.className }` : `` }` }>
				{this.props.children}
				<style jsx global>{`
					@media screen and (max-width: 1120px) {
						.fr-container {
							margin-left: 1.5rem !important;
							margin-right: 1.5rem !important;

							max-width: calc(100% - 3rem) !important;
						}
					}

					.fr-container {
						max-width: 100%;
						width: 1060px;
					}
				`}</style>
			</div>
		)
	}
}

export default Container
