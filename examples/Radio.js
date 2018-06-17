import { Cartesian } from "@compositor/kit"
import { Radio } from "../src/components/Radio/Radio"
import Fractures from "./Fractures"
import React from "react"

export default () => (
	<Fractures>
		<Cartesian component={ Radio } label="Radio" isDisabled={ [false, true] } state={ "value-1" } value={ [null, "value-1"] } />
	</Fractures>
)
