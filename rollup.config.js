import * as path from "path";
import svelte from "rollup-plugin-svelte";
import autoPreprocess from "svelte-preprocess";
import scss from "rollup-plugin-scss";
import alias from "@rollup/plugin-alias";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import { terser } from "rollup-plugin-terser";
import serve from "rollup-plugin-serve";
import livereload from "rollup-plugin-livereload";

const production = !process.env.ROLLUP_WATCH;
const emitSourcemaps = !production;
const scssPath = path.resolve(__dirname, "src/scss/");

export default {
	input: "src/main.js",
	output: {
		file: "public/bundle.js",
		sourcemap: emitSourcemaps,
		// iife – A self-executing function, suitable for inclusion as a <script> tag
		format: "iife",
		// Global variable name representing your bundle; for iife/umd bundles
		name: "app",
	},
	plugins: [
		// Compile Svelte components
		svelte({
			dev: !production,
			// Processes SCSS embedded within Svelte files
			preprocess: autoPreprocess({
				scss: {
					includePaths: [scssPath],
					sourceMap: emitSourcemaps,
				}
			}),
			// Emit CSS for scss plugin to bundle
			emitCss: true
		}),

		// Processes SCSS imported from other JS files and plugins
		scss({
			output: "public/bundle.css",
			outputStyle: production ? "compressed" : "",
			sourceMap: emitSourcemaps,
		}),

		// Import aliases
		alias({
			resolve: [".svelte", ".js"],
			entries: [
				{ find: "~/styles", replacement: scssPath },
				{ find: "~/stores", replacement: path.resolve(__dirname, "src/stores") },
				{ find: "~/modules", replacement: path.resolve(__dirname, "src/modules") },
				{ find: "~", replacement: path.resolve(__dirname, "src/components") },
			]
		}),

		// Locates modules using the Node resolution algorithm
		resolve({
			// Some package.json files have a "browser" field which specifies alternative files to load for people bundling for the browser
			browser: true,
			// Prevent bundling the same package multiple times 
			dedupe: ["svelte"]
		}),

		// Convert CommonJS modules to ES6
		commonjs(),

		// Transpile
		production && babel({
			presets: [["@babel/preset-env"]],
			plugins: ["@babel/plugin-transform-runtime"],
			extensions: [".js", ".jsx", ".es6", ".es", ".mjs", ".svelte"],
			babelHelpers: "runtime"
		}),

		// Minify generated bundle if in production mode
		production && terser(),

		// Dev host
		!production && serve({
			open: false,
			contentBase: "public",
			host: "0.0.0.0",
			port: 5000
		}),

		!production && livereload(),
	],
	watch: {
		clearScreen: false
	}
};