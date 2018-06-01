import Label from "./Label.js"

describe("Label", () => {
	const tree = renderer.create(<Label>Label</Label>).toJSON()

	it("Renders correctly", () => expect(tree).toMatchSnapshot())
})
