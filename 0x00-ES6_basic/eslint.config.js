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
      },
  },
];
