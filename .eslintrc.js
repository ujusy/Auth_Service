module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    'airbnb-base',
    'eslint:recommended',
    'plugin:mocha/recommended',
  ],
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: [
    'mocha',
  ],
  rules: {
    'prefer-arrow-callback': 'off',
    'mocha/prefer-arrow-callback': 'error',
  },
};
