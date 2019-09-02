import H4 from './H4'

describe('H4', () => {
	const tree = renderer.create(<H4>Extra header</H4>).toJSON()

	it('Matches snapshot', () => {
		expect(tree).toMatchSnapshot()
	})
})
