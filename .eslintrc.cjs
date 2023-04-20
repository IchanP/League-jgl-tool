// eslint-disable-next-line no-undef
module.exports = {
	'env': {
		'browser': true,
		'es2021': true,
		'jest': true 
	},
	'globals': {
		'JSX': 'readonly'
	},
	'extends': [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:jsdoc/recommended'
	],
	'overrides': [
	],
	'parserOptions': {
		'ecmaVersion': 'latest',
		'sourceType': 'module'
	},
	'plugins': [
		'react',
		'jsdoc'
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
		'react/prop-types': 'off',
		'jsdoc/require-jsdoc': [
			'error',
			{
				'require': {
					'FunctionDeclaration': false,
					'MethodDefinition': true,
					'ClassDeclaration': false,
					'ArrowFunctionExpression': true,
					'FunctionExpression': false
				}
			}
		] 
	}
}

