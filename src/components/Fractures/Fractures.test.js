// import Fractures from "./Fractures.js"

xdescribe("Fractures", () => {
	const tree = renderer.create(<Fractures />).toJSON()

	it("Renders correctly", () => expect(tree).toMatchSnapshot())
})

xdescribe("Fractures with theme", () => {
	const tree = renderer.create(<Fractures theme="blue" />).toJSON()

	it("Renders correctly", () => expect(tree).toMatchSnapshot())
})
