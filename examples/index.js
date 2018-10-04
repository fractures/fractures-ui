import styled, { css } from "styled-components"
import React from "react"
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
	Tooltip
} from "../src"

const setValue = e => {
	console.log("setValue", e)
}

const Line = styled.div`
	display: flex;
	flex-direction: column;

	${ props =>
		props.direction &&
		css`
			flex-direction: row;

			& > *:not(:last-child) {
				margin-right: 0.5rem;
			}
		` };

	& > *:not(:last-child) {
		margin-bottom: 0.5rem;
	}
`

const Box = props => (
	<div style={ { padding: "1rem 0" } }>
		<h2 style={ { marginBottom: "1rem" } }>{props.title}</h2>
		<Line>{props.children}</Line>
	</div>
)

const Index = () => (
	<Container style={ { padding: "2rem 0" } }>
		<Fractures theme="blue" />
		<Box title="Button">
			<Line direction="row">
				<Button type="primary" value="Default" action={ e => setValue(e) } />
				<Button type="primary" value="Active" isActive={ true } />
				<Button type="primary" value="Disabled" isDisabled={ true } />
				<Button type="primary" value="Rounded" isRounded={ true } />
				<Button type="primary" value="Small" small={ true } />
				<Button type="primary" value="Small Rounded" small={ true } isRounded={ true } />
			</Line>
			<Line direction="row">
				<Button type="secondary" value="Default" />
				<Button type="secondary" value="Active" isActive={ true } />
				<Button type="secondary" value="Disabled" isDisabled={ true } />
				<Button type="secondary" value="Rounded" isRounded={ true } />
				<Button type="secondary" value="Small" small={ true } />
				<Button type="secondary" value="Small Rounded" small={ true } isRounded={ true } />
			</Line>
			<Line direction="row">
				<Button type="primary" value="Activate" isLoading={ true } action={ e => setValue(e) } />
				<Button type="secondary" value="Activate" isLoading={ false } action={ e => setValue(e) } />
				<Button type="primary" value="Activate" isRounded={ true } isLoading={ false } action={ e => setValue(e) } />
				<Button type="secondary" value="Activate" isRounded={ true } isLoading={ false } action={ e => setValue(e) } />
			</Line>
		</Box>
		<Box title="ButtonGroup">
			<ButtonGroup>
				<Button type="primary" value="Active" isActive={ true } />
				<Button type="primary" value="Second" />
				<Button type="primary" value="Disabled" isDisabled={ true } />
			</ButtonGroup>
			<ButtonGroup>
				<Button type="secondary" value="Active" isActive={ true } />
				<Button type="secondary" value="Second" />
			</ButtonGroup>
			<ButtonGroup>
				<Button type="secondary" value="First" isRounded={ true } />
				<Button type="secondary" value="Active" isActive={ true } isRounded={ true } />
			</ButtonGroup>
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
			<Range value={ 40 } set={ e => setValue(e) } />
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
		<Box title="Color">
			<Color hex="#eee" name="gray" />
			<Color hex="#9911aa" name="purple" />
		</Box>
	</Container>
)

export default Index
