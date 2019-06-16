import H5 from './H5'

describe('H5', () => {
	const tree = renderer.create(<H5>Extra header</H5>).toJSON()

	it('Matches snapshot', () => {
		expect(tree).toMatchSnapshot()
	})
})
