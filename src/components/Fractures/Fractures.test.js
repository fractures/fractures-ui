import Fractures from "./Fractures.js"

describe("Fractures", () => {
	const tree = renderer.create(<Fractures />).toJSON()

	it("Renders correctly", () => expect(tree).toMatchSnapshot())
})

describe("Fractures with theme", () => {
	const tree = renderer.create(<Fractures theme="blue" />).toJSON()

	it("Renders correctly", () => expect(tree).toMatchSnapshot())
})
