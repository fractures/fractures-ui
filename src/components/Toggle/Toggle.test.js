import Toggle from "./Toggle"

const mockFn = jest.fn()

describe("Toggle", () => {
	const componentRender = <Toggle label="Toggle" check={ mockFn() } />
	const component = renderer.create(componentRender)
	const tree = component.toJSON()

	it("Renders correctly", () => {
		expect(tree).toMatchSnapshot()
	})
})
