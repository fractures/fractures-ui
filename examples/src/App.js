import React, { Component } from "react"
import {
	Button,
	ButtonGroup,
	Checkbox,
	Color,
	Container,
	Fractures,
	Input,
	Label,
	Loading,
	Progress,
	Radio,
	Range,
	Toggle,
	Tooltip,
	themes
} from "@fractures/ui"

const setValue = e => {
	console.log("setValue", e)
}

const Line = props => <div className={ props.isRow ? `flex line--row` : `flex line--column` }>{props.children}</div>

const Box = props => (
	<div style={ { padding: "1rem 0" } }>
		<h2 style={ { marginBottom: "1rem" } }>{props.title}</h2>
		<Line>{props.children}</Line>
	</div>
)

class Index extends Component {
	constructor(props) {
		super(props)

		this.state = {
			theme: themes[0],
			isLoading: false,
			valueRange: 140
		}
	}

	setRange(e) {
		this.setState({ valueRange: parseInt(e) })
	}

	toggleLoading() {
		this.setState({ isLoading: !this.state.isLoading })
	}

	setTheme(theme) {
		this.setState({ theme: theme })
	}

	render() {
		return (
			<div style={ { backgroundColor: this.state.theme.colors.ground } }>
				<Fractures theme={ this.state.theme.name } />
				<nav style={ { backgroundColor: this.state.theme.colors.shade100 } }>
					<ButtonGroup>
						{themes.map((theme, key) => (
							<Button
								key={ key }
								type="secondary"
								value={ theme.name }
								isSmall={ true }
								action={ () => this.setTheme(theme) }
								isActive={ theme.name === this.state.theme.name }
							/>
						))}
					</ButtonGroup>
					<Button
						type="secondary"
						value={ this.state.isLoading ? "Loading on" : "Loading off" }
						isSmall={ true }
						action={ () => this.toggleLoading() }
						isActive={ this.state.isLoading }
					/>
				</nav>
				<Container style={ { padding: "2rem 0" } }>
					<Box title="Color">
						<Line isRow>
							{Object.keys(this.state.theme.colors).map((color, key) => (
								<Color key={ key } hex={ this.state.theme.colors[color] } name={ color } />
							))}
						</Line>
					</Box>
					<Box title="Button Primary">
						<Line isRow>
							<Button type="primary" value="Default" action={ () => this.toggleLoading() } />
							<Button type="primary" value="Active" isActive={ true } />
							<Button type="primary" value="Disabled" isDisabled={ true } />
							<Button type="primary" value="Rounded" isRounded={ true } />
							<Button type="primary" value="Small" isSmall={ true } />
							<Button type="primary" value="Small Rounded" isSmall={ true } isRounded={ true } />
							<Button type="primary" value="Small Rounded" isSmall={ true } isRounded={ true } isLoading={ !this.state.isLoading } />
						</Line>
						<Line isRow>
							<Button type="primary" value="Activate" isLoading={ !this.state.isLoading } action={ e => setValue(e) } />
							<Button type="primary" value="Activate" isRounded={ true } action={ e => setValue(e) } isLoading={ !this.state.isLoading } />
						</Line>
					</Box>

					<Box title="Button Secondary">
						<Line isRow>
							<Button type="secondary" value="Default" />
							<Button type="secondary" value="Active" isActive={ true } />
							<Button type="secondary" value="Disabled" isDisabled={ true } />
							<Button type="secondary" value="Rounded" isRounded={ true } />
							<Button type="secondary" value="Small" isSmall={ true } />
							<Button type="secondary" value="Small Rounded" isSmall={ true } isRounded={ true } />
							<Button type="secondary" value="Small Rounded" isSmall={ true } isRounded={ true } isLoading={ !this.state.isLoading } />
						</Line>
						<Line isRow>
							<Button type="secondary" value="Activate" isLoading={ !this.state.isLoading } action={ e => setValue(e) } />
							<Button type="secondary" value="Activate" isRounded={ true } isLoading={ false } action={ e => setValue(e) } />
							<Button type="secondary" value="Activate" isRounded={ true } action={ e => setValue(e) } isLoading={ !this.state.isLoading } />
						</Line>
					</Box>
					<Box title="ButtonGroup">
						<Line isRow>
							<ButtonGroup>
								<Button type="primary" value="Active" isActive={ true } />
								<Button type="primary" value="Second" />
								<Button type="primary" value="Disabled" isDisabled={ true } />
							</ButtonGroup>
						</Line>
						<Line isRow>
							<ButtonGroup>
								<Button type="primary" value="First" isSmall={ true } />
								<Button type="primary" value="Active" isSmall={ true } isActive={ true } />
							</ButtonGroup>
						</Line>
						<Line isRow>
							<ButtonGroup>
								<Button type="secondary" value="Active" isActive={ true } />
								<Button type="secondary" value="Second" />
							</ButtonGroup>
						</Line>
						<Line isRow>
							<ButtonGroup>
								<Button type="secondary" value="First" isRounded={ true } />
								<Button type="secondary" value="Active" isActive={ true } isRounded={ true } />
							</ButtonGroup>
						</Line>
						<Line isRow>
							<ButtonGroup>
								<Button type="secondary" value="First" isRounded={ true } isSmall={ true } />
								<Button type="secondary" value="Active" isActive={ true } isSmall={ true } isRounded={ true } />
							</ButtonGroup>
						</Line>
					</Box>
					<Box title="Checkbox">
						<Checkbox label="Checkbox, hmm" isChecked={ true } check={ e => setValue(e) } />
						<Checkbox label="This is disabled, checked" isChecked={ true } isDisabled={ true } />
						<Checkbox label="This is disabled, unchecked" isChecked={ false } isDisabled={ true } />
					</Box>
					<Box title="Toggle">
						<Toggle label="This is a toggle" isChecked={ true } isDisabled={ false } />
						<Toggle label="This is a toggle" isChecked={ false } isDisabled={ false } />
						<Toggle label="This is a toggle" isChecked={ false } isDisabled={ true } />
					</Box>
					<Box title="Radio">
						<Radio label="Val 1" value={ 0 } state={ true } set={ e => setValue(e) } />
						<Radio label="Val 2" value={ 1 } state={ true } set={ e => setValue(e) } />
						<Radio label="Disabled" value={ 4 } state={ true } isDisabled={ true } />
					</Box>
					<Box title="Range">
						<Line>
							<Range value={ 31 } min={ 0 } max={ 100 } />
							<Range isVerbose value={ this.state.valueRange } set={ e => this.setRange(e) } min={ 110 } max={ 340 } />
							<Range value={ 52 } min={ 0 } max={ 100 } />
							<Range value={ 5 } min={ 0 } max={ 100 } step={ 5 } />
						</Line>
					</Box>
					<Box title="Progress">
						<Progress value={ 22 } />
						<Progress value={ 34 } max={ 60 } />
						<Progress value={ 100 } />
					</Box>
					<Box title="Input">
						<Input change={ e => setValue(e) } label="With label" placeholder="https://" />
						<Input change={ e => setValue(e) } value="Without label, with value" />
						<Input change={ e => setValue(e) } label="Number type" type="number" />
						<Input change={ e => setValue(e) } label="Password type" type="password" />
						<Input change={ e => setValue(e) } label="Date type" type="date" />
						<Input change={ e => setValue(e) } label="Textarea type" type="textarea" />
					</Box>
					<Box title="Loading">
						<Loading color="white" size={ 10 } />
						<Loading color="white" size={ 20 } />
						<Loading color="blue" size={ 10 } />
						<Loading color="blue" size={ 20 } />
					</Box>
					<Box title="Tooltip">
						<Tooltip text="Helo">Label text</Tooltip>
						<Tooltip text="This button submit forms.">
							<Button value="Submit" />
						</Tooltip>
						<Tooltip
							text={ `Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem
		 			ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum
		 			dolor sit amet. Lorem ipsum dolor sit amet.` }
						>
							Label text
						</Tooltip>
						<Tooltip text="Helo">
							<Button value="Lorem ipsum" />
						</Tooltip>
					</Box>
					<Box title="Label">
						<Label>Label text</Label>
					</Box>
				</Container>
			</div>
		)
	}
}

export default Index
