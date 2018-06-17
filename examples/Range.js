import { Cartesian } from "@compositor/kit"
import { Range } from "../src/components/Range/Range"
import Fractures from "./Fractures"
import React from "react"

const RangeExample = () => (
	<Fractures>
		<Cartesian component={ Range } value={ [0, 25, 100] } />
	</Fractures>
)

export default RangeExample
