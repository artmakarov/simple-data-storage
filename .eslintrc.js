module.exports = {
  root: true,

  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module',
  },

  env: {
    "browser": true,
    "es6": true
  },

  extends: [
    'airbnb-base',
    'plugin:sonarjs/recommended',
    'plugin:jest/recommended',
  ],

  plugins: [
    'babel',
    'sonarjs',
    'jest',
  ],

  // add your custom rules here
  rules: {
    'no-multi-assign': 'warn',
    'no-restricted-globals': 'warn',
    'no-void': 'off',
    'prefer-rest-params': 'warn',

    // rules for SonarJS
    'sonarjs/no-duplicate-string': 'warn',
  },
};
