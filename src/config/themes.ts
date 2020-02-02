const fonts = {
	fonts: {
		default: 'Roboto, \'sans-serif\'',
		mono: '\'Roboto Mono\', monospace'
	}
}

const normalColors = {
	red: {
		100: '#FFD8DA',
		300: '#FF979D',
		500: '#f94b56',
		700: '#CF2E38',
		900: '#8F171F'
	},
	yellow: {
		100: '#FFF2D2',
		300: '#FFE6A6',
		500: '#FFD058',
		700: '#DFA103',
		900: '#8D5D00'
	},
	green: {
		100: '#E4FBDF',
		300: '#B3E8A7',
		500: '#82C971',
		700: '#4DA439',
		900: '#1A6309'
	},
	blue: {
		100: '#D3E6FF',
		300: '#95C3FF',
		500: '#539DFE',
		700: '#216FD3',
		900: '#073775'
	}
}

const themes = [
	{
		name: 'blue',
		colors: {
			gray: {
				0: '#fff',
				100: '#e8f2fd',
				300: '#76a7e7',
				500: '#3482da',
				700: '#2463a5',
				900: '#102a45'
			},
			...normalColors
		},
		...fonts
	},
	{
		name: 'black',
		colors: {
			gray: {
				0: '#fff',
				100: '#eee',
				300: '#919191',
				500: '#666666',
				700: '#484848',
				900: '#111'
			},
			...normalColors
		},
		...fonts
	},
	{
		name: 'invert',
		colors: {
			gray: {
				0: '#111',
				100: '#303030',
				300: '#696969',
				500: '#888888',
				700: '#a9a9a9',
				900: '#eee'
			},
			...normalColors
		},
		...fonts
	}
]

export default themes
