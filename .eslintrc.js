module.exports = {
    env: {
        es2021: true,
        node: true
    },
    extends: [
        'standard'
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    plugins: [
        '@typescript-eslint'
    ],
    rules: {
        'no-empty': 'off',
        quotes: [1, 'single'],
        indent: ['off', 2],
        'no-multi-spaces': 'off',
        'no-eval': [2],
        'no-restricted-modules': [1],
        eqeqeq: [2]
    }
}
