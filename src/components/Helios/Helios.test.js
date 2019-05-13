import Helios from "./Helios.js"

describe("Helios", () => {
	const tree = renderer.create(<Helios />).toJSON()

	it("Renders correctly", () => expect(tree).toMatchSnapshot())
})

describe("Helios with theme", () => {
	const tree = renderer.create(<Helios theme="blue" />).toJSON()

	it("Renders correctly", () => expect(tree).toMatchSnapshot())
})
