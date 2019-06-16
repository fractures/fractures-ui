import Loading from './Loading'

describe('Loading', () => {
	const tree = renderer.create(<Loading />).toJSON()

	it('Renders correctly', () => expect(tree).toMatchSnapshot())
})

describe('Loading with color', () => {
	const tree = renderer.create(<Loading color="white" />).toJSON()

	it('Renders correctly', () => expect(tree).toMatchSnapshot())
})
