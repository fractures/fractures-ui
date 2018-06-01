import { Button } from "./Button.js"

const mockFn = jest.fn()

describe("Button", () => {
	const componentRender = <Button value="Primary" action={ mockFn(true) } />
	const component = renderer.create(componentRender)
	const tree = component.toJSON()
	const app = mount(componentRender)

	it("Renders correctly", () => {
		expect(tree).toMatchSnapshot()
	})

	it("Click on button actually calls passed function", () => {
		const button = app.find("input")

		button.simulate("click")
		expect(mockFn).toBeCalledWith(true)
	})
})

describe("Button Secondary", () => {
	const componentRender = <Button value="Secondary" type="secondary" action={ mockFn(false) } />
	const component = renderer.create(componentRender)
	const tree = component.toJSON()
	const app = mount(componentRender)

	it("Renders correctly", () => {
		expect(tree).toMatchSnapshot()
	})

	xit("Secondary button gets secondary class", () => {
		expect(app.find(".fr-btn").hasClass("fr-btn-secondary")).toEqual(true)
	})
})
