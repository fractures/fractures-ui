import React, { Component } from "react"

class ButtonGroup extends Component {
	render() {
		return (
			<div className="fr-button-group flex">
				{this.props.children}
				<style jsx global>{`
					.fr-button-group .fr-btn--radius,
					.fr-button-group .radius-max {
						border-radius: 0;
					}

					.fr-button-group > div:not(:first-child) {
						margin: 0 0 0 -1px;
					}

					.fr-button-group .fr-btn:focus:not(.fr-btn--disabled):not(.fr-btn--loading) {
						position: relative;
					}

					.fr-button-group > div:first-child .fr-btn--radius {
						border-top-left-radius: 0.25rem;
						border-bottom-left-radius: 0.25rem;
					}

					.fr-button-group > div:last-child .fr-btn--radius {
						border-top-right-radius: 0.25rem;
						border-bottom-right-radius: 0.25rem;
					}

					.fr-button-group > div:first-child .radius-max {
						border-top-left-radius: 10rem;
						border-bottom-left-radius: 10rem;
					}

					.fr-button-group > div:last-child .radius-max {
						border-top-right-radius: 10rem;
						border-bottom-right-radius: 10rem;
					}
				`}</style>
			</div>
		)
	}
}

export default ButtonGroup
