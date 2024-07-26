import base from './base.mjs'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactRecommended from 'eslint-plugin-react/configs/recommended.js'

export default [
  ...base,
  {
    files: ['**/*.{js,jsx,mjs,cjs,ts,tsx}'],
    plugins: {
      react,
    },
    ...reactRecommended,
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
      },
    },
    rules: {
      'jsx-quotes': ['error', 'prefer-single'],
      'react/jsx-wrap-multilines': [
        'error',
        {
          return: 'parens-new-line',
          declaration: 'parens-new-line',
        },
      ],
      'react/jsx-uses-react': 'error',
      'react/jsx-uses-vars': 'error',
      'react/jsx-closing-bracket-location': 'error',
      'react/jsx-closing-tag-location': 'error',
      'react/jsx-max-props-per-line': 'error',
      'react/display-name': 'off',
      'react/jsx-first-prop-new-line': ['error', 'multiline-multiprop'],
      'react/self-closing-comp': 'error',
      'react/jsx-tag-spacing': 'error',
      'react/react-in-jsx-scope': 0,
      'react/jsx-equals-spacing': ['error', 'never'],
    },
  },
]
