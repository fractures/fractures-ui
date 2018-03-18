import Input from "./Input.js"

describe("Input", () => {
	const componentRender = <Input />
	const component = renderer.create(componentRender)
	const tree = component.toJSON()

	it("Renders correctly", () => {
		expect(tree).toMatchSnapshot()
	})
})
