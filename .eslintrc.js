module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    // 'no-console': 'off',
    'global-require': 'off',
    'import/no-dynamic-require': 'off',
    'max-len': 'off',
    'no-shadow': 'off',
  },
};
