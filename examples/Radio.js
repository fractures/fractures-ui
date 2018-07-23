import { Cartesian } from "@compositor/kit"
import { Radio } from "../src/components/Radio/Radio"
import Fractures from "../src/components/Fractures/Fractures"
import React, { Fragment } from "react"

const RadioExample = () => (
	<Fragment>
		<Fractures theme="blue" />
		<Cartesian component={ Radio } label="Radio" isDisabled={ [false, true] } state={ "value-1" } value={ [null, "value-1"] } />
	</Fragment>
)

export default RadioExample
