import { Cartesian } from "@compositor/kit"
import { Input } from "../src/components/Input/Input"
import Fractures from "./Fractures"
import React from "react"

const InputExample = () => (
	<Fractures>
		<Cartesian
			component={ Input }
			label={ [null, "Label"] }
			placeholder={ [null, "Placeholder"] }
			type={ [null, "textarea"] }
			value={ [null, "Value"] }
		/>
	</Fractures>
)

export default InputExample
