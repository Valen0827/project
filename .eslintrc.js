module.exports = {
    env: {
      browser: true,
      es2021: true,
    },
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:jsx-a11y/recommended',
      'plugin:import/errors',
      'plugin:import/warnings',
    ],
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    plugins: ['react'],
    rules: {
      'react/prop-types': 'off', // si no usas PropTypes
      'spellcheck/spell-checker': [
    'warn',
    {
      comments: true,
      strings: true,
      identifiers: true,
      lang: 'en_US',
    },
      ],
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  };