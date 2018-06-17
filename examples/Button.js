import { Button } from "../src/components/Button/Button"
import { Cartesian } from "@compositor/kit"
import Fractures from "./Fractures"
import React from "react"

export default () => (
	<Fractures>
		<Cartesian
			component={ Button }
			isActive={ [false, true] }
			isDisabled={ [false, true] }
			isRounded={ [false, true] }
			isLoading={ [false, true] }
			small={ [false, true] }
			value={ "Button" }
			type={ ["primary", "secondary"] }
		/>
	</Fractures>
)
