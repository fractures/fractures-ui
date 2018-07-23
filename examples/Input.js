import { Cartesian } from "@compositor/kit"
import { Input } from "../src/components/Input/Input"
import Fractures from "../src/components/Fractures/Fractures"
import React, { Fragment } from "react"

const InputExample = () => (
	<Fragment>
		<Fractures theme="blue" />
		<Cartesian
			component={ Input }
			label={ [null, "Label"] }
			placeholder={ [null, "Placeholder"] }
			type={ [null, "textarea"] }
			value={ [null, "Value"] }
		/>
	</Fragment>
)

export default InputExample
