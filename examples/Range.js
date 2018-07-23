import { Cartesian } from "@compositor/kit"
import { Range } from "../src/components/Range/Range"
import Fractures from "../src/components/Fractures/Fractures"
import React, { Fragment } from "react"

const RangeExample = () => (
	<Fragment>
		<Fractures theme="blue" />
		<Cartesian component={ Range } value={ [0, 25, 100] } />
	</Fragment>
)

export default RangeExample
