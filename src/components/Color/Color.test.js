import Color from './Color.js'

describe('Color', () => {
	const componentRender = <Color background="#fff" hex="#eee" name="Light" />
	const component = renderer.create(componentRender)
	const tree = component.toJSON()

	it('Renders correctly', () => {
		expect(tree).toMatchSnapshot()
	})
})
