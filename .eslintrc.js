module.exports = {
  "extends": "airbnb-base",
  "globals": {
    "expect": true
  },
  "parser": "@typescript-eslint/parser",
  "plugins": [
    "chai-friendly",
    "mocha",
    "@typescript-eslint"
  ],
  "env": {
    "mocha": true
  },
  "rules": {
    "@typescript-eslint/global-require": 0,
    "@typescript-eslint/no-unused-vars": ["error", { "argsIgnorePattern": "next" }],
    "@typescript-eslint/no-underscore-dangle": 0,
    "@typescript-eslint/prefer-arrow-callback": 0,
    "@typescript-eslint/prefer-rest-params": 0,
    "@typescript-eslint/no-restricted-globals": 0,
    "@typescript-eslint/no-continue": 0,
    "@typescript-eslint/class-methods-use-this": 0,
    "@typescript-eslint/func-names": 0,
  }
};