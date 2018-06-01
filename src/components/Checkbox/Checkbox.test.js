import { Checkbox } from "./Checkbox.js"

const mockFn = jest.fn()

describe("Checkbox", () => {
	const componentRender = <Checkbox label="Checkbox" check={ mockFn() } />
	const component = renderer.create(componentRender)
	const tree = component.toJSON()

	it("Renders correctly", () => {
		expect(tree).toMatchSnapshot()
	})
})

describe("Checkbox checked", () => {
	const componentRender = <Checkbox label="Checked checkbox" isChecked={ true } check={ mockFn() } />
	const component = renderer.create(componentRender)
	const tree = component.toJSON()

	it("Renders correctly", () => {
		expect(tree).toMatchSnapshot()
	})
})

describe("Checkbox disabled", () => {
	const componentRender = <Checkbox label="Disabled checkbox" isDisabled={ true } check={ mockFn() } />
	const component = renderer.create(componentRender)
	const tree = component.toJSON()

	it("Renders correctly", () => {
		expect(tree).toMatchSnapshot()
	})
})
