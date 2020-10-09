import pkg from './package.json';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import replace from '@rollup/plugin-replace';
import resolve from '@rollup/plugin-node-resolve';
import svelte from 'rollup-plugin-svelte';
import { terser } from 'rollup-plugin-terser';
import config from 'sapper/config/rollup.js';
import sveltePreprocess from 'svelte-preprocess';

const mode = process.env.NODE_ENV;
const dev = mode === 'development';
const legacy = !!process.env.SAPPER_LEGACY_BUILD;

const dedupe = ['svelte', 'svelte/transition', 'svelte/internal'];
const onwarn = (warning, onwarn) =>
	(warning.code === 'MISSING_EXPORT' && /'preload'/.test(warning.message)) ||
	(warning.code === 'CIRCULAR_DEPENDENCY' && /[/\\]@sapper[/\\]/.test(warning.message)) ||
	(warning.code === 'THIS_IS_UNDEFINED') ||
	onwarn(warning);
const preprocess = [
	sveltePreprocess({
		postcss: true,
		sourceMap: true
	})
];

export default {
	client: {
		input: config.client.input(),
		output: config.client.output(),
		plugins: [
			replace({
				'process.browser': true,
				'process.env.NODE_ENV': JSON.stringify(mode)
			}),
			svelte({
				dev,
				emitCss: true,
				extensions: ['.svelte'],
				hydratable: true,
				preprocess
			}),
			resolve({
				browser: true,
				dedupe
			}),
			commonjs(),
			json(),
			!dev && legacy && babel({
				babelHelpers: 'runtime',
				exclude: [
					'node_modules/@babel/**',
					'node_modules/core-js/**',
					'node_modules/core-js-pure/**'
				],
				extensions: ['.js', '.mjs', '.html', '.svelte'],
				plugins: [
					'@babel/plugin-syntax-dynamic-import',
					'@babel/plugin-proposal-object-rest-spread',
					'@babel/plugin-transform-spread',
					['@babel/plugin-transform-runtime', {
						useESModules: true
					}]
				],
				presets: [
					[ 
						'@babel/preset-env',
						{
							'useBuiltIns': 'entry',
							'corejs': 3
						}
					]
				]
			}),
			!dev && terser({
				module: true,
				safari10: true
			})
		],
		preserveEntrySignatures: false,
		onwarn
	},
	server: {
		input: config.server.input(),
		output: config.server.output(),
		plugins: [
			replace({
				'process.browser': false,
				'process.env.NODE_ENV': JSON.stringify(mode),
				// prevent html caching á la https://github.com/sveltejs/sapper/issues/567#issuecomment-542788270
				// hacky, but if html is cached users may receive wrong locale when they navigate back to root url /
				'max-age=600': 'no-cache'
			}),
			svelte({
				dev,
				extensions: ['.svelte'],
				generate: 'ssr',
				hydratable: true,
				preprocess
			}),
			resolve({
				dedupe
			}),
			commonjs(),
			json()
		],
		external: Object.keys(pkg.dependencies).concat(
			require('module').builtinModules || Object.keys(process.binding('natives'))
		),
		preserveEntrySignatures: 'strict',
		onwarn
	},
	serviceworker: {
		input: config.serviceworker.input(),
		output: config.serviceworker.output(),
		plugins: [
			resolve(),
			replace({
				'process.browser': true,
				'process.env.NODE_ENV': JSON.stringify(mode),
				'max-age=600': 'no-cache'
			}),
			commonjs(),
			!dev && terser()
		],
		preserveEntrySignatures: false,
		onwarn
	}
};