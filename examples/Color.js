import { Cartesian } from "@compositor/kit"
import Color from "../src/components/Color/Color"
import Fractures from "../src/components/Fractures/Fractures"
import React, { Fragment } from "react"

const ColorExample = () => (
	<Fragment>
		<Fractures theme="blue" />
		<Cartesian component={ Color } hex={ ["#444111", "#9911aa"] } name={ ["Gray", "Purple"] } />
	</Fragment>
)

export default ColorExample
