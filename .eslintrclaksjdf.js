module.exports = {
	extends: [
		'airbnb',
		'airbnb-typescript',
		'prettier',
		'eslint-plugin-prettier/recommended',
		'eslint-plugin-svelte/recommended',
		// 'prettier/react',
		// 'plugin:jsx-a11y/recommended',
		// 'plugin:prettier/recommended',
		// 'plugin:import/typescript'
	],
	plugins: ['prettier'],
	parserOptions: {
		project: './tsconfig.eslint.json',
		tsconfigRootDir: __dirname,
	},
	rules: {
		'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
		'import/extensions': [
			'error',
			'ignorePackages',
			{
				ts: 'never',
				svelte: 'never',
			},
		],
		'prettier/prettier': 'error',
	},
};
