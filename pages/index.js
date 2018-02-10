import { Component } from "react"
import Button from "../components/Button"
import Checkbox from "../components/Checkbox"
import Container from "../components/Container"
import fractures from "fractures/dist/fractures.css"

class Index extends Component {
	constructor(props) {
		super(props)

		this.state = {
			checkbox: false
		}
	}

	// Mock change function for checkbox
	toggleCheckbox() {
		this.setState({ checkbox: !this.state.checkbox })
	}

	render() {
		return (
			<div className="minvh-100">
				<Container className="py-4">
					<div className="my-4">
						<h1 className="my-2">Buttons</h1>
						<div className="flex flex-gap-1 my-1">
							<Button type="primary" value="Primary" />
							<Button type="secondary" value="Secondary" />
						</div>
						<div className="flex flex-gap-1 my-1">
							<Button type="primary" value="Primary small" small={ true } />
							<Button type="secondary" value="Secondary small" small={ true } />
						</div>
						<div className="flex flex-gap-1 my-1">
							<Button type="primary" value="Disabled" disabled={ true } />
							<Button type="secondary" value="Disabled" disabled={ true } />
						</div>
					</div>
					<div className="my-4">
						<h1 className="my-2">Checkbox</h1>
						<div className="flex flex-gap-1 flex-column my-1">
							<Checkbox
								label="Checkbox, hmm"
								isChecked={ this.state.checkbox }
								check={ () => this.toggleCheckbox() }
							/>
							<Checkbox label="This is disabled, checked" isChecked={ true } isDisabled={ true } />
							<Checkbox label="This is disabled, unchecked" isChecked={ false } isDisabled={ true } />
						</div>
					</div>
				</Container>
				<style jsx global>
					{fractures}
				</style>
				<style jsx global>{`
					:root {
						--color-blue-0: #e8f2fd;
						--color-blue-1: #b2d4f9;
						--color-blue-2: #6cacf5;
						--color-blue-3: #3482da;
						--color-blue-4: #255e9e;
						--color-blue-5: #1b4370;
						--color-blue-6: #102a45;
					}

					body,
					input {
						font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif,
							"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
					}
				`}</style>
			</div>
		)
	}
}

export default Index
