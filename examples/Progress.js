import { Cartesian } from "@compositor/kit"
import { Progress } from "../src/components/Progress/Progress"
import Fractures from "./Fractures"
import React from "react"

export default () => (
	<Fractures>
		<Cartesian component={ Progress } max={ [75, 100] } value={ [0, 50, 100] } />
	</Fractures>
)
