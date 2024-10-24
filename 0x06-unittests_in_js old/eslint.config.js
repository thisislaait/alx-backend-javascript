export default [
  {
    ignores: ['node_modules/**'],
  },
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    rules: {
      'no-var': 'error',
      'prefer-const': 'error',
      'semi': ['error', 'always'],
      'quotes': ['error', 'single'],
      'no-unused-vars': 'warn',
      'indent': ['error', 2, { 'SwitchCase': 1 }],
      'no-multiple-empty-lines': ['error', { 'max': 1 }],
      'eol-last': ['error', 'always'],
      'block-scoped-var': 'error',
      'no-trailing-spaces': 'error', // Complete the rule here
    },
  },
];

