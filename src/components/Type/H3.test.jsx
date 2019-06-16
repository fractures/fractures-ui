import H3 from './H3'

describe('H3', () => {
	const tree = renderer.create(<H3>Extra header</H3>).toJSON()

	it('Matches snapshot', () => {
		expect(tree).toMatchSnapshot()
	})
})
