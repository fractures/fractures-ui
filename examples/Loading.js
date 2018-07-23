import { Cartesian } from "@compositor/kit"
import Loading from "../src/components/Loading/Loading"
import Fractures from "../src/components/Fractures/Fractures"
import React, { Fragment } from "react"

const LoadingExample = () => (
	<Fragment>
		<Fractures theme="blue" />
		<Cartesian component={ Loading } color={ ["white", "var(--fr-500)"] } size={ [10, 20] } />
	</Fragment>
)

export default LoadingExample
