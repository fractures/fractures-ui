import { Cartesian } from "@compositor/kit"
import { Checkbox, Toggle } from "../src/components/Checkbox/Checkbox"
import Fractures from "./Fractures"
import React from "react"

const CheckboxExample = () => (
	<Fractures>
		<div className="p-2">
			<Cartesian component={ Checkbox } label={ [null, "Checkbox"] } isChecked={ [false, true] } isDisabled={ [false, true] } />
			<Cartesian component={ Toggle } label={ [null, "Toggle"] } isChecked={ [false, true] } isDisabled={ [false, true] } />
		</div>
	</Fractures>
)

export default CheckboxExample
