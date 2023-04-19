// eslint-disable-next-line no-undef
module.exports = {
	'ignorePatterns': ['node_modules/*'],
	'env': {
		'browser': true,
		'es2021': true,
		'jest': true 
	},
	'extends': [
		'eslint:recommended',
		'plugin:react/recommended',
	],
	'overrides': [
	],
	'parserOptions': {
		'ecmaVersion': 'latest',
		'sourceType': 'module'
	},
	'plugins': [
		'react'
	],
	'rules': {
		'indent': [
			'error',
			'tab'
		],
		'linebreak-style': [
			'off',
		],
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'error',
			'never'
		],
		'react/prop-types': 'off' 
	}
}
