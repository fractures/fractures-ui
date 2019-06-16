import ButtonGroup from './ButtonGroup.js'

describe('ButtonGroup', () => {
	const componentRender = <ButtonGroup>Children.</ButtonGroup>
	const component = renderer.create(componentRender)
	const tree = component.toJSON()

	it('Renders correctly', () => expect(tree).toMatchSnapshot())
})
