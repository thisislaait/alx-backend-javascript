module.exports = {
    env: {
      browser: true,
      es6: true,
      node: true,
      jest: true
    },
    extends: 'eslint:recommended',
    parserOptions: {
      ecmaVersion: 2018,
      sourceType: 'module'
    },
    rules: {
      'no-console': 'off'
    }
  };
  