import Progress from "./Progress.js"

describe("Progress", () => {
	const componentRender = <Progress value={ 31 } />
	const component = renderer.create(componentRender)
	const tree = component.toJSON()

	it("Renders correctly", () => {
		expect(tree).toMatchSnapshot()
	})
})
