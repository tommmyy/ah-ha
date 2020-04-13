const ignorePatterns = ['/.history/', '/node_modules/', '/es/', '/dist/', '/lib/'];

module.exports = {
	snapshotSerializers: ['enzyme-to-json/serializer'],
	setupFilesAfterEnv: ['<rootDir>/testsSetup.js'],
	transform: {
		'^.+\\.js$': 'babel-jest',
		'^.+\\.s?css$': '<rootDir>/scssJestTransform.js',
	},
	modulePathIgnorePatterns: ['.cache', '.parcel-cache'],
	testPathIgnorePatterns: ignorePatterns,
	coveragePathIgnorePatterns: ignorePatterns,
	transformIgnorePatterns: [
		'/node_modules/(?!intl-messageformat|intl-messageformat-parser).+\\.js$',
	],
};
