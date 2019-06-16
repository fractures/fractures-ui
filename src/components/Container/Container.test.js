import Container from './Container.js'

describe('Container', () => {
	const componentRender = (
		<Container>
			<div />
		</Container>
	)
	const component = renderer.create(componentRender)
	const tree = component.toJSON()

	it('Renders correctly', () => {
		expect(tree).toMatchSnapshot()
	})
})
