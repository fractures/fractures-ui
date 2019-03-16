import P from "./P"

describe("P", () => {
	const tree = renderer.create(<P>Lorem ipsum</P>).toJSON()

	it("Matches snapshot", () => {
		expect(tree).toMatchSnapshot()
	})
})
