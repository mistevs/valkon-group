module.exports = {
	root: true,
	env: {
		browser: true,
		node: true,
	},
	parserOptions: {
		parser: 'babel-eslint',
	},
	extends: [
		'@nuxtjs',
		'prettier',
		'prettier/vue',
		'plugin:prettier/recommended',
		'plugin:nuxt/recommended',
	],
	plugins: ['prettier', 'no-loops'],
	// add your custom rules here
	rules: {
		'nuxt/no-cjs-in-config': 'off',

		// vue
		'vue/require-default-prop': 0,
		'vue/no-unused-components': 1,
		'vue/attributes-order': 0,
		'vue/order-in-components': 0,
		'vue/name-property-casing': 0,
		'vue/require-component-is': 0,

		// js
		'import/order': 1,
		'no-unused-vars': 1,
		'no-undef': 1,
		'no-unreachable': 1,

		// conventions
		// 'no-loops/no-loops': 2,

		// prettier
		'prettier/prettier': 1,

		// complexity
		complexity: ['error', 16],
		'max-depth': ['error', 3], // preventing if () { if () { if () {}}}
		'max-lines-per-function': ['error', 50], // break functions into logical pieces
		'max-params': ['warn', 4], // pass through value objects instead of individual parameters
		'max-nested-callbacks': ['error', 2], // this should rarely happen when async/await is used
	},
}
