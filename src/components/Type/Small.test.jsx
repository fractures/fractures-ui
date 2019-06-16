import Small from './Small'

describe('Small', () => {
	const tree = renderer.create(<Small>Lorem ipsum</Small>).toJSON()

	it('Matches snapshot', () => {
		expect(tree).toMatchSnapshot()
	})
})
