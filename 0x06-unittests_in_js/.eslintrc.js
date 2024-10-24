// module.exports = {
//   env: {
//     browser: false,
//     es6: true,
//     jest: true,
//   },
//   extends: [
//     'airbnb-base',
//     'plugin:jest/all',
//   ],
//   globals: {
//     Atomics: 'readonly',
//     SharedArrayBuffer: 'readonly',
//   },
//   parserOptions: {
//     ecmaVersion: 2018,
//     sourceType: 'module',
//   },
//   plugins: ['jest'],
//   rules: {
//     'max-classes-per-file': 'off',
//     'no-underscore-dangle': 'off',
//     'no-console': 'off',
//     'no-shadow': 'off',
//     "linebreak-style": ["error", "unix"],
//     'no-restricted-syntax': [
//       'error',
//       'LabeledStatement',
//       'WithStatement',
//     ],
//   },
//   overrides:[
//     {
//       files: ['*.js'],
//       excludedFiles: 'babel.config.js',
//     }
//   ]
  
// };

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
