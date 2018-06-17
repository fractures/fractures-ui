import { Button } from "../src/components/Button/Button"
import ButtonGroup from "../src/components/ButtonGroup/ButtonGroup"
import Fractures from "./Fractures"
import React from "react"

const ExampleButtonGroup = () => (
	<Fractures>
		<ButtonGroup>
			<Button type="primary" isActive={ true } value="Option" />
			<Button type="primary" value="Secondary" />
		</ButtonGroup>
		<ButtonGroup>
			<Button type="secondary" isActive={ true } value="Secondary" />
			<Button type="secondary" value="Third" />
		</ButtonGroup>
		<ButtonGroup>
			<Button type="secondary" small={ true } value="Secondary" />
			<Button type="secondary" isActive={ true } small={ true } value="Fourth" />
			<Button type="secondary" small={ true } value="Tenth" />
			<Button type="secondary" small={ true } value="Third" />
		</ButtonGroup>
	</Fractures>
)

export default ExampleButtonGroup
