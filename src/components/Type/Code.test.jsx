import Code from "./Code"

describe("Code", () => {
	const tree = renderer.create(<Code>Debug.Call()</Code>).toJSON()

	it("Matches snapshot", () => expect(tree).toMatchSnapshot())
})
