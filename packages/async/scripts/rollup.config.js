/* eslint-disable import/no-extraneous-dependencies */
import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import replace from '@rollup/plugin-replace';
import nodeGlobals from 'rollup-plugin-node-globals';
import { terser } from 'rollup-plugin-terser';

const input = './src/index.js';
const globals = {
	react: 'React',
	'react-dom': 'ReactDOM',
};
const babelOptions = {
	exclude: /node_modules/,
	// We are using @babel/plugin-transform-runtime
	runtimeHelpers: true,
	configFile: '../../babel.config.js',
};
const commonjsOptions = {
	ignoreGlobal: true,
	include: /node_modules/,
};

const onwarn = (warning, warn) => {
	if (warning.code === 'THIS_IS_UNDEFINED') {
		return;
	}
	warn(warning); // this requires Rollup 0.46
};

export default [
	{
		input,
		output: {
			file: 'build/umd/ahha-async.development.js',
			format: 'umd',
			name: 'ahha-async',
			globals,
		},
		onwarn,
		external: Object.keys(globals),
		plugins: [
			nodeResolve(),
			babel(babelOptions),
			commonjs(commonjsOptions),
			nodeGlobals(), // Wait for https://github.com/cssinjs/jss/pull/893
			replace({ 'process.env.NODE_ENV': JSON.stringify('development') }),
		],
	},
	{
		input,
		onwarn,
		output: {
			file: 'build/umd/ahha-async.production.min.js',
			format: 'umd',
			name: 'ahha-async',
			globals,
		},
		external: Object.keys(globals),
		plugins: [
			nodeResolve(),
			babel(babelOptions),
			commonjs(commonjsOptions),
			nodeGlobals(), // Wait for https://github.com/cssinjs/jss/pull/893
			replace({ 'process.env.NODE_ENV': JSON.stringify('production') }),
			terser(),
		],
	},
];
