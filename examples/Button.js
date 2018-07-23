import Button from "../src/components/Button/Button"
import { Cartesian } from "@compositor/kit"
import Fractures from "../src/components/Fractures/Fractures"
import React, { Fragment } from "react"

const ButtonExample = () => (
	<Fragment>
		<Fractures theme="blue" />
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
	</Fragment>
)

export default ButtonExample
