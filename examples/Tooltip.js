import { Button } from "../src/components/Button/Button"
import Fractures from "../src/components/Fractures/Fractures"
import React, { Fragment } from "react"
import Tooltip from "../src/components/Tooltip/Tooltip"

const TooltipExample = () => (
	<Fragment>
		<Fractures theme="blue" />
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
	</Fragment>
)

export default TooltipExample
