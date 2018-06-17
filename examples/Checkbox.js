import { Cartesian } from "@compositor/kit"
import { Checkbox } from "../src/components/Checkbox/Checkbox"
import Fractures from "./Fractures"
import React from "react"

export default () => (
	<Fractures>
		<Cartesian component={ Checkbox } label="Checkbox" isChecked={ [false, true] } isDisabled={ [false, true] } />
	</Fractures>
)
