module.exports = {
	moduleFileExtensions: ["js", "jsx"],
	moduleNameMapper: {
		fractures: "<rootDir>/__mocks__/styleMock.js"
	},
	setupFiles: ["<rootDir>/jest.setup.js"],
	testPathIgnorePatterns: ["<rootDir>/node_modules/"]
}
