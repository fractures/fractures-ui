import { Cartesian } from "@compositor/kit"
import { Progress } from "../src/components/Progress/Progress"
import Fractures from "../src/components/Fractures/Fractures"
import React, { Fragment } from "react"

const ProgressExample = () => (
	<Fragment>
		<Fractures theme="blue" />
		<Cartesian component={ Progress } max={ [75, 100] } value={ [0, 50, 100] } />
	</Fragment>
)

export default ProgressExample
