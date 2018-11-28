import HR from "./HR"

describe("HR", () => {
	const tree = renderer.create(<HR />).toJSON()

	it("Matches snapshot", () => {
		expect(tree).toMatchSnapshot()
	})
})
