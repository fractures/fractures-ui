import Radio from "./Radio.js"

const mockFn = jest.fn()

describe("Radio", () => {
	const componentRender = <Radio set={ mockFn() } />
	const component = renderer.create(componentRender)
	const tree = component.toJSON()

	it("Renders correctly", () => {
		expect(tree).toMatchSnapshot()
	})
})
