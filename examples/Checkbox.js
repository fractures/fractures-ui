import { Cartesian } from "@compositor/kit"
import { Checkbox, Toggle } from "../src/components/Checkbox/Checkbox"
import Fractures from "../src/components/Fractures/Fractures"
import React, { Fragment } from "react"

const CheckboxExample = () => (
	<Fragment>
		<Fractures theme="blue" />
		<div className="p-2">
			<Cartesian component={ Checkbox } label={ [null, "Checkbox"] } isChecked={ [false, true] } isDisabled={ [false, true] } />
			<Cartesian component={ Toggle } label={ [null, "Toggle"] } isChecked={ [false, true] } isDisabled={ [false, true] } />
		</div>
	</Fragment>
)

export default CheckboxExample
