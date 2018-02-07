import {Component} from "react"
import Button from "../components/Button"
import Container from "../components/Container"
import fractures from "fractures/dist/fractures.css"

class Index extends Component {
	constructor(props) {
		super(props)
	}

	mock(e) {
		console.log(e)
	}

	render() {
		return (
			<div className="minvh-100" style={{backgroundColor: "var(--color-blue-0)"}}>
				<Container className="py-4">
					<h1 className="my-4">Buttons</h1>
					<div className="flex flex-gap-1 my-1">
						<Button type="primary" value="Primary" />
						<Button type="secondary" value="Secondary" />
					</div>
					<div className="flex flex-gap-1 my-1">
						<Button type="primary" value="Primary small" small={true} />
						<Button type="secondary" value="Secondary small" small={true} />
					</div>
					<div className="flex flex-gap-1 my-1">
						<Button type="primary" value="Disabled" disabled={true} />
						<Button type="secondary" value="Disabled" disabled={true} />
					</div>
				</Container>
				<style jsx global>
					{fractures}
				</style>
				<style jsx global>{`
					:root {
						--color-blue-0: #e8f2fd;
						--color-blue-1: #b2d4f9;
						--color-blue-2: #6cacf5;
						--color-blue-3: #3482da;
						--color-blue-4: #255e9e;
						--color-blue-5: #1b4370;
						--color-blue-6: #102a45;
					}

					body,
					input {
						font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
							"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
					}
				`}</style>
			</div>
		)
	}
}

export default Index
