let defaultPresets;

// We release a ES version of Material-UI.
// It's something that matches the latest official supported features of JavaScript.
// Nothing more (stage-1, etc), nothing less (require, etc).
if (process.env.BABEL_ENV === 'es') {
	defaultPresets = [];
} else {
	defaultPresets = [
		[
			'@babel/preset-env',
			{
				bugfixes: true,
				modules: ['esm', 'production-umd'].includes(process.env.BABEL_ENV) ? false : 'commonjs',
			},
		],
	];
}
const productionPlugins = [
	[
		'@babel/plugin-transform-react-constant-elements',
		{ allowMutablePropsOnTags: ['FormattedMessage'] },
	],
	[
		'babel-plugin-transform-react-remove-prop-types',
		{
			mode: 'unsafe-wrap',
		},
	],
];

module.exports = {
	presets: defaultPresets.concat(['@babel/preset-react']),
	plugins: [
		['@babel/plugin-proposal-class-properties', { loose: true }],
		['@babel/plugin-proposal-object-rest-spread', { loose: true }],
		// any package needs to declare 7.4.4 as a runtime dependency. default is ^7.0.0
		['@babel/plugin-transform-runtime', { version: '^7.4.4' }],
		// for IE 11 support
		'@babel/plugin-transform-object-assign',
	],
	env: {
		cjs: {
			plugins: productionPlugins,
		},
		development: {
			plugins: [
				[
					'babel-plugin-module-resolver',
					{
						alias: {
							modules: './modules',
						},
					},
				],
			],
		},
		esm: {
			plugins: [...productionPlugins, ['@babel/plugin-transform-runtime', { useESModules: true }]],
		},
		es: {
			plugins: [...productionPlugins, ['@babel/plugin-transform-runtime', { useESModules: true }]],
		},
		production: {
			plugins: [...productionPlugins, ['@babel/plugin-transform-runtime', { useESModules: true }]],
		},
		'production-umd': {
			plugins: [...productionPlugins, ['@babel/plugin-transform-runtime', { useESModules: true }]],
		},
		test: {
			sourceMaps: 'both',
		},
	},
	ignore: [/@babel[\\|/]runtime/], // Fix a Windows issue.
};
