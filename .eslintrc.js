module.exports = {
  env: {
    node: true,
    browser: true,
    jest: true,
  },
  plugins: ['@ts-lite'],
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  extends: [],
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
  },

  rules: {
    // '@ts-lite/no-conditional-render': 'warn',
  },
};
