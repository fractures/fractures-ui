import { Input } from "../src/components/Input/Input"
import { Progress } from "../src/components/Progress/Progress"
import { Radio } from "../src/components/Radio/Radio"
import { Range } from "../src/components/Range/Range"
import Button from "../src/components/Button/Button"
import ButtonGroup from "../src/components/ButtonGroup/ButtonGroup"
import Checkbox from "../src/components/Checkbox/Checkbox"
import Color from "../src/components/Color/Color"
import Container from "../src/components/Container/Container"
import Fractures from "../src/components/Fractures/Fractures"
import Label from "../src/components/Label/Label"
import Loading from "../src/components/Loading/Loading"
import React from "react"
import Toggle from "../src/components/Toggle/Toggle"
import Tooltip from "../src/components/Tooltip/Tooltip"

const toggleCheckbox = e => {
	console.log("Checkbox toggled.", e)
}

const setValue = e => {
	console.log("Radio set.", e)
}

const Index = () => (
	<Container className="py-4">
		<link href="https://unpkg.com/fractures@1.3.3/dist/fractures.prefixed.min.css" rel="stylesheet" />

		<Fractures theme="blue" />
		<div className="my-4">
			<h4 className="my-2">Buttons</h4>
			<div className="flex flex-gap-1 my-1">
				<Button type="primary" value="Default" action={ () => this.mockClick() } />
				<Button type="primary" value="Active" isActive={ true } />
				<Button type="primary" value="Disabled" isDisabled={ true } />
				<Button type="primary" value="Rounded" isRounded={ true } />
				<Button type="primary" value="Small" small={ true } />
				<Button type="primary" value="Small Rounded" small={ true } isRounded={ true } />
			</div>
			<div className="flex flex-gap-1 my-1">
				<Button type="secondary" value="Default" />
				<Button type="secondary" value="Active" isActive={ true } />
				<Button type="secondary" value="Disabled" isDisabled={ true } />
				<Button type="secondary" value="Rounded" isRounded={ true } />
				<Button type="secondary" value="Small" small={ true } />
				<Button type="secondary" value="Small Rounded" small={ true } isRounded={ true } />
			</div>
			<div className="flex flex-gap-1 my-1">
				<Button type="primary" value="Activate" isLoading={ true } action={ () => this.mockClick() } />
				<Button type="secondary" value="Activate" isLoading={ false } action={ () => this.mockClick() } />
				<Button type="primary" value="Activate" isRounded={ true } isLoading={ false } action={ () => this.mockClick() } />
				<Button type="secondary" value="Activate" isRounded={ true } isLoading={ false } action={ () => this.mockClick() } />
			</div>
		</div>
		<div className="my-4">
			<h4 className="my-2">ButtonGroup</h4>
			<div className="flex flex-gap-1 my-1">
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
			</div>
		</div>
		<div className="my-4">
			<h4 className="my-2">Checkbox</h4>
			<div className="flex flex-gap-1 flex-column my-1">
				<Checkbox label="Checkbox, hmm" isChecked={ true } check={ () => toggleCheckbox() } />
				<Checkbox label="This is disabled, checked" isChecked={ true } isDisabled={ true } />
				<Checkbox label="This is disabled, unchecked" isChecked={ false } isDisabled={ true } />
				<Toggle label="This is a toggle" isChecked={ false } isDisabled={ false } />
			</div>
		</div>
		<div className="my-4">
			<h4 className="my-2">Radio</h4>
			<div className="flex flex-gap-1 flex-column my-1">
				<Radio label="Val 1" value={ 0 } state={ true } set={ e => setValue(e) } />
				<Radio label="Val 2" value={ 1 } state={ true } set={ e => setValue(e) } />
				<Radio label="Disabled" value={ 4 } state={ true } isDisabled={ true } />
			</div>
		</div>
		<div className="my-4">
			<h4 className="my-2">Range</h4>
			<div className="flex flex-gap-1 flex-column my-1">
				<Range value={ 40 } set={ e => setValue(e) } />
			</div>
		</div>
		<div className="my-4">
			<h4 className="my-2">Progress</h4>
			<div className="flex flex-gap-1 flex-column my-1">
				<Progress value={ 22 } />
				<Progress value={ 34 } max={ 60 } />
				<Progress value={ 100 } />
			</div>
		</div>
		<div className="my-4">
			<h4 className="my-2">Input</h4>
			<div className="flex flex-gap-1 flex-column my-1">
				<Input change={ e => this.inputChange(e) } label="With label" placeholder="https://" />
				<Input change={ e => this.inputChange(e) } value="Without label, with value" />
				<Input change={ e => this.inputChange(e) } label="Number type" type="number" />
				<Input change={ e => this.inputChange(e) } label="Password type" type="password" />
				<Input change={ e => this.inputChange(e) } label="Date type" type="date" />
				<Input change={ e => this.inputChange(e) } label="Textarea type" type="textarea" />
			</div>
		</div>
		<div>
			<Loading color="white" size={ 10 } />
			<Loading color="white" size={ 20 } />
			<Loading color="blue" size={ 10 } />
			<Loading color="blue" size={ 20 } />
		</div>
		<div className="m-2">
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
		</div>
		<div>
			<Label>Label text</Label>
		</div>
		<div>
			<Color hex="#eee" name="gray" />
			<Color hex="#9911aa" name="purple" />
		</div>
	</Container>
)

export default Index
