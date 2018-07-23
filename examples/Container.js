import Container from "../src/components/Container/Container"
import Fractures from "../src/components/Fractures/Fractures"
import React, { Fragment } from "react"

const ContainerExample = () => (
	<Fragment>
		<Fractures theme="blue" />
		<Container>Lorem ipsum</Container>
		{/* <Container width={ 600 }>Lorem ipsum</Container> */}
	</Fragment>
)

export default ContainerExample
