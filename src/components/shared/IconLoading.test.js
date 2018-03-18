import IconLoading from "./IconLoading.js"

describe("IconLoading", () => {
	const componentRender = <IconLoading />
	const component = renderer.create(componentRender)
	const tree = component.toJSON()

	it("Renders correctly", () => {
		expect(tree).toMatchSnapshot()
	})
})

describe("IconLoading with color", () => {
	const componentRender = <IconLoading color="white" />
	const component = renderer.create(componentRender)
	const tree = component.toJSON()

	it("Renders correctly", () => {
		expect(tree).toMatchSnapshot()
	})
})
