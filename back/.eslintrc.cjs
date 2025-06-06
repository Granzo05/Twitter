module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'next',
    'next/core-web-vitals', 
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  rules: {
    'prefer-const': 'off',
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-unused-vars": 'off',
    "@typescript-eslint/no-explicit-any": 'off'
  },
};