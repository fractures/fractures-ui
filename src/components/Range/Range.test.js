import Range from './Range.js'

const mockFn = jest.fn()

describe('Range', () => {
	const componentRender = <Range value={ 42 } set={ mockFn() } />
	const component = renderer.create(componentRender)
	const tree = component.toJSON()

	it('Renders correctly', () => {
		expect(tree).toMatchSnapshot()
	})
})
