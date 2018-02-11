import { Component } from "react"
import Button from "../components/Button"
import Radio from "../components/Radio"
import Checkbox from "../components/Checkbox"
import Container from "../components/Container"
import "fractures/dist/fractures.css"

const themes = [
	["#e8f2fd", "#b2d4f9", "#6cacf5", "#3482da", "#255e9e", "#1b4370", "#102a45"],
	["#f8f9f9", "#dee1e3", "#bec4c8", "#97a1a7", "#7f8a93", "#5f6e78", "#374047"],
	["#374047", "#5f6e78", "#7f8a93", "#97a1a7", "#bec4c8", "#dee1e3", "#f8f9f9"]
]

class Index extends Component {
	constructor(props) {
		super(props)

		this.state = {
			checkbox: false,
			radio: 1,
			theme: 0
		}
	}

	// Mock change function for checkbox
	toggleCheckbox() {
		this.setState({ checkbox: !this.state.checkbox })
	}

	// Mock change function for radio
	setRadio(value) {
		this.setState({ radio: value })
	}

	render() {
		return (
			<div className="minvh-100" style={ this.state.theme === 2 ? { backgroundColor: "#374047" } : {} }>
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
					<a onClick={ () => this.setState({ theme: 2 }) }>
						<Button
							type="primary"
							value="theme invert"
							small={ true }
							isActive={ this.state.theme === 2 && true }
						/>
					</a>
				</aside>
				<Container className="py-4">
					<div className="my-4">
						<h1 className="my-2">Buttons</h1>
						<div className="flex flex-gap-1 my-1">
							<Button type="primary" value="Default" />
							<Button type="primary" value="Active" isActive={ true } />
							<Button type="primary" value="Disabled" disabled={ true } />
							<Button type="primary" value="Rounded" isRounded={ true } />
							<Button type="primary" value="Small" small={ true } />
							<Button type="primary" value="Small Rounded" small={ true } isRounded={ true } />
						</div>
						<div className="flex flex-gap-1 my-1">
							<Button type="secondary" value="Default" />
							<Button type="secondary" value="Active" isActive={ true } />
							<Button type="secondary" value="Disabled" disabled={ true } />
							<Button type="secondary" value="Rounded" isRounded={ true } />
							<Button type="secondary" value="Small" small={ true } />
							<Button type="secondary" value="Small Rounded" small={ true } isRounded={ true } />
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
					<div className="my-4">
						<h1 className="my-2">Radio</h1>
						<div className="flex flex-gap-1 flex-column my-1">
							<Radio label="Val 1" value={ 0 } state={ this.state.radio } set={ e => this.setRadio(e) } />
							<Radio label="Val 2" value={ 1 } state={ this.state.radio } set={ e => this.setRadio(e) } />
							<Radio label="Disabled" value={ 4 } state={ this.state.radio } isDisabled={ true } />
						</div>
					</div>
				</Container>
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

					body,
					input {
						color: var(--shade-5);

						font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif,
							"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
					}
				`}</style>
			</div>
		)
	}
}

export default Index
