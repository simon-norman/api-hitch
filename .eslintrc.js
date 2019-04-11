module.exports = {
  "extends": ["airbnb-base", "plugin:@typescript-eslint/recommended"],
  "globals": {
    "expect": true
  },
  "parser": "@typescript-eslint/parser",
  "plugins": [
    "chai-friendly",
    "mocha",
    "@typescript-eslint",
    "import"
  ],
  "env": {
    "mocha": true
  },
  "rules": {
    "@typescript-eslint/global-require": 0,
    "@typescript-eslint/no-unused-vars": ["error", { "argsIgnorePattern": "next" }],
    "import/no-extraneous-dependencies": [2, { devDependencies: true }],
    "chai-friendly/no-unused-expressions": 2,
    "linebreak-style": 0,
    "no-unused-expressions": 0,
    "prefer-arrow-callback": 0,
    "mocha/prefer-arrow-callback": 2,
    "func-names": 0,
    "import/first": 0,
    "import/newline-after-import": 0,
    "@typescript-eslint/no-underscore-dangle": 0,
    "@typescript-eslint/explicit-member-accessibility": 0,
    "@typescript-eslint/prefer-arrow-callback": 0,
    "@typescript-eslint/prefer-rest-params": 0,
    "@typescript-eslint/no-restricted-globals": 0,
    "@typescript-eslint/no-continue": 0,
    "@typescript-eslint/class-methods-use-this": 0,
    "@typescript-eslint/func-names": 0,
    "indent": "off",
    "@typescript-eslint/indent": ["error", 2],
    "no-restricted-syntax": ["error", "LabeledStatement", "WithStatement"],
  },
  "settings": {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"]
    },
    "import/resolver": {
      "typescript": {
        "directory": "./"
      }
    }
  }
};