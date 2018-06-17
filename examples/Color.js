import { Cartesian } from "@compositor/kit"
import Color from "../src/components/Color/Color"
import Fractures from "./Fractures"
import React from "react"

const ColorExample = () => (
	<Fractures>
		<Cartesian component={ Color } hex={ ["#444111", "#9911aa"] } name={ ["Gray", "Purple"] } />
	</Fractures>
)

export default ColorExample
