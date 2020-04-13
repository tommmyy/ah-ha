module.exports = api => {
	api.cache.using(() => process.env.NODE_ENV);

	return {
		presets: [
			[
				'babel-preset-react-union',
				{ test: process.env.NODE_ENV === 'test', loose: true, library: false, universal: false },
			],
		],
		ignore: [/@babel[\\|/]runtime/], // Fix a Windows issue.
	};
};
