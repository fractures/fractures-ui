import { Button } from "../src/components/Button/Button"
import Fractures from "./Fractures"
import React from "react"
import Tooltip from "../src/components/Tooltip/Tooltip"

const TooltipExample = () => (
	<Fractures>
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
	</Fractures>
)

export default TooltipExample
