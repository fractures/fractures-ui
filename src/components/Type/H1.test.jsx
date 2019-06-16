import H1 from './H1'

describe('H1', () => {
	const tree = renderer.create(<H1>Extra header</H1>).toJSON()

	it('Matches snapshot', () => {
		expect(tree).toMatchSnapshot()
	})
})
