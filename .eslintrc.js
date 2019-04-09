module.exports = {
  "extends": ["airbnb-base", "plugin:@typescript-eslint/recommended"],
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
    "import/no-extraneous-dependencies": [2, { devDependencies: true }],
    "chai-friendly/no-unused-expressions": 2,
    "linebreak-style": ["error", "windows"],
    "no-unused-expressions": 0,
    "@typescript-eslint/no-underscore-dangle": 0,
    "@typescript-eslint/prefer-arrow-callback": 0,
    "@typescript-eslint/prefer-rest-params": 0,
    "@typescript-eslint/no-restricted-globals": 0,
    "@typescript-eslint/no-continue": 0,
    "@typescript-eslint/class-methods-use-this": 0,
    "@typescript-eslint/func-names": 0,
    "no-restricted-syntax": ["error", "LabeledStatement", "WithStatement"],
  }
};