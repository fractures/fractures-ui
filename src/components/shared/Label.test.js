import Label from "./Label.js"

describe("Label", () => {
	const componentRender = <Label>Label</Label>
	const component = renderer.create(componentRender)
	const tree = component.toJSON()

	it("Renders correctly", () => {
		expect(tree).toMatchSnapshot()
	})
})
