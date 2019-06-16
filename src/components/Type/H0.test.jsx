import H0 from './H0'

describe('H0', () => {
	const tree = renderer.create(<H0>Extra header</H0>).toJSON()

	it('Matches snapshot', () => {
		expect(tree).toMatchSnapshot()
	})
})
