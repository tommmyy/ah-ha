module.exports = {
	root: true,
	extends: ['react-union'],
	plugins: ['react-hooks'],
	rules: {
		'import/order': ['error', { 'newlines-between': 'always' }],
		'sort-imports': [
			'error',
			{
				ignoreCase: false,
				ignoreDeclarationSort: true,
				ignoreMemberSort: false,
				memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
			},
		],
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'warn',
		'react/jsx-pascal-case': ['error', { allowAllCaps: true }],
		'import/no-extraneous-dependencies': [
			'error',
			{
				devDependencies: [
					'**/*.config.js',
					'**/*.stories.js',
					'**/*.test.js',
					'**/gatsby-config.js',
					'testsSetup.js',
				],
			},
		],
		// conflicts with Prettier
		'react/jsx-max-props-per-line': 0,
		'react/jsx-fragments': [2, 'element'],
		'react/jsx-curly-brace-presence': [2, 'never'],
	},
};
