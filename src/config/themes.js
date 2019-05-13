const fonts = {
	fonts: {
		default: "Roboto, 'sans-serif'",
		mono: "'Roboto Mono', monospace"
	}
}

const normalColors = {
	red: { 500: "#f94b56" },
	yellow: { 500: "#ffd058" },
	green: { 500: "#82c971" },
	blue: { 500: "#76a7e7" }
}

const themes = [
	{
		name: "blue",
		colors: {
			gray: {
				0: "#fff",
				100: "#e8f2fd",
				300: "#76a7e7",
				500: "#3482da",
				700: "#2463a5",
				900: "#102a45"
			},
			...normalColors
		},
		...fonts
	},
	{
		name: "black",
		colors: {
			gray: {
				0: "#fff",
				100: "#eee",
				300: "#919191",
				500: "#666666",
				700: "#484848",
				900: "#111"
			},
			...normalColors
		},
		...fonts
	},
	{
		name: "invert",
		colors: {
			gray: {
				0: "#111",
				100: "#303030",
				300: "#696969",
				500: "#888888",
				700: "#a9a9a9",
				900: "#eee"
			},
			...normalColors
		},
		...fonts
	},
	{
		name: "test",
		colors: {
			gray: {
				0: "#caffb8",
				100: "#92dfb4",
				300: "#4e999d",
				500: "#437684",
				700: "#3c5564",
				900: "#1d1d1f"
			},
			...normalColors
		},
		...fonts
	},
	{
		name: "secret",
		colors: {
			gray: {
				0: "#caffb8",
				100: "#f5f5f8",
				300: "#c3c5d3",
				500: "#5a68e8",
				700: "#414885",
				900: "#26262b"
			},
			...normalColors,
			blue: { 500: "#5a68e8" }
		},
		...fonts
	}
]

export default themes
