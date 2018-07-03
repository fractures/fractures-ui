import { Cartesian } from "@compositor/kit"
import Loading from "../src/components/Loading/Loading"
import Fractures from "./Fractures"
import React from "react"

const LoadingExample = () => (
	<Fractures>
		<Cartesian component={ Loading } color={ ["white", "var(--fr-500)"] } size={ [10, 20] } />
	</Fractures>
)

export default LoadingExample
