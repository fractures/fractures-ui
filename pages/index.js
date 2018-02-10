import { Component } from "react"
import Button from "../components/Button"
import Checkbox from "../components/Checkbox"
import Container from "../components/Container"
import fractures from "fractures/dist/fractures.css"

const themes = [
	["#e8f2fd", "#b2d4f9", "#6cacf5", "#3482da", "#255e9e", "#1b4370", "#102a45"],
	["#f8f8f8", "#eee", "#999", "#777", "#555", "#333", "#111"]
]

class Index extends Component {
	constructor(props) {
		super(props)

		this.state = {
			checkbox: false,
			theme: 0
		}
	}

	// Mock change function for checkbox
	toggleCheckbox() {
		this.setState({ checkbox: !this.state.checkbox })
	}

	render() {
		return (
			<div className="minvh-100">
				<aside className="sticky top-0 right-0 flex flex-gap-1 p-2">
					<a onClick={ () => this.setState({ theme: 0 }) }>
						<Button
							type="primary"
							value="theme blue"
							small={ true }
							isActive={ this.state.theme === 0 && true }
						/>
					</a>
					<a onClick={ () => this.setState({ theme: 1 }) }>
						<Button
							type="primary"
							value="theme black"
							small={ true }
							isActive={ this.state.theme === 1 && true }
						/>
					</a>
				</aside>
				<Container className="py-4">
					<div className="my-4">
						<h1 className="my-2">Buttons</h1>
						<div className="flex flex-gap-1 my-1">
							<Button type="primary" value="Primary" />
							<Button type="primary" value="Active" isActive={ true } />
							<Button type="primary" value="Disabled" disabled={ true } />
							<Button type="primary" value="Primary small" small={ true } />
						</div>
						<div className="flex flex-gap-1 my-1">
							<Button type="secondary" value="Secondary" />
							<Button type="secondary" value="Active" isActive={ true } />
							<Button type="secondary" value="Disabled" disabled={ true } />
							<Button type="secondary" value="Secondary small" small={ true } />
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
						--shade-0: ${ themes[this.state.theme][0] };
						--shade-1: ${ themes[this.state.theme][1] };
						--shade-2: ${ themes[this.state.theme][2] };
						--shade-3: ${ themes[this.state.theme][3] };
						--shade-4: ${ themes[this.state.theme][4] };
						--shade-5: ${ themes[this.state.theme][5] };
						--shade-6: ${ themes[this.state.theme][6] };
					}

					/* body,
					input {
						font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif,
							"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
					} */

					input {
						font-family: Roboto;
					}
				`}</style>
			</div>
		)
	}
}

export default Index
