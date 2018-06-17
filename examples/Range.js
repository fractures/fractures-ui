import { Cartesian } from "@compositor/kit"
import { Range } from "../src/components/Range/Range"
import Fractures from "./Fractures"
import React from "react"

export default () => (
	<Fractures>
		<Cartesian component={ Range } value={ [0, 25, 100] } />
	</Fractures>
)
