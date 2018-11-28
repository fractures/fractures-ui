import Label from "./Label"

describe("Label", () => {
	const tree = renderer.create(<Label label="Green default" />).toJSON()

	it("Matches snapshot", () => expect(tree).toMatchSnapshot())
})
