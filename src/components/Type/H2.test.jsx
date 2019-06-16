import H2 from './H2'

describe('H2', () => {
	const tree = renderer.create(<H2>Extra header</H2>).toJSON()

	it('Matches snapshot', () => {
		expect(tree).toMatchSnapshot()
	})
})
