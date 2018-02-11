import { Component } from "react"
import Button from "../components/Button"
import Checkbox from "../components/Checkbox"
import Color from "../components/Color"
import Container from "../components/Container"
import Radio from "../components/Radio"
import chroma from "chroma-js"

import "fractures/dist/fractures.css"

const themes = [
	[
		"white",
		...chroma
			.scale(["#e8f2fd", "#3482da", "#102a45"])
			.mode("lch")
			.colors(7)
	],
	[
		"white",
		...chroma
			.scale(["#eee", "#666", "#111"])
			.mode("lch")
			.colors(7)
	],
	[
		"#111",
		...chroma
			.scale(["#303030", "#888", "#eee"])
			.mode("lch")
			.colors(7)
	],
	[
		"#fff",
		...chroma
			.scale(["#EBEDF7", "#4452EB", "#1D1D1F"])
			.mode("lch")
			.colors(7)
	]
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

	// Mock action function for button
	mockClick() {
		console.log("Clicked.")
	}

	render() {
		return (
			<div className="minvh-100" style={ { backgroundColor: themes[this.state.theme][0] } }>
				<div className="flex">
					{themes[this.state.theme].map((color, key) => <Color key={ key } hex={ color } name={ key } />)}
				</div>
				<aside className="sticky top-0 right-0 flex flex-right flex-gap-1 p-2">
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
					<a onClick={ () => this.setState({ theme: 3 }) }>
						<Button
							type="primary"
							value="theme fun"
							small={ true }
							isActive={ this.state.theme === 3 && true }
						/>
					</a>
				</aside>
				<Container className="py-4">
					<div className="my-4">
						<h1 className="my-2">Buttons</h1>
						<div className="flex flex-gap-1 my-1">
							<Button type="primary" value="Default" action={ () => this.mockClick() } />
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
						--shade-7: ${ themes[this.state.theme][7] };
					}

					body,
					input {
						color: var(--shade-4);

						font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif,
							"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
					}
				`}</style>
			</div>
		)
	}
}

export default Index
