import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'

export default [
  {
    languageOptions: {
      globals: globals.browser,
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,

  {
    rules: {
      'no-console': [
        'error',
        {
          allow: [
            'info',
            'warn',
            'error',
          ],
        },
      ],
      'max-len': [
        'error',
        {
          code: 120,
          ignoreComments: true,
          ignoreStrings: true,
          ignoreUrls: true,
          ignoreTemplateLiterals: true,
        },
      ],
      'semi': ['error', 'never'],
      'indent': [
        'error',
        2,
        {
          ignoredNodes: [
            'FunctionExpression > .params[decorators.length > 0]',
            'FunctionExpression > .params > :matches(Decorator, :not(:first-child))',
            'ClassBody.body > PropertyDefinition[decorators.length > 0] > .key',
          ],
        },

      ],
      'linebreak-style': [
        'error',
        'unix',
      ],
      'quotes': [
        'error',
        'single',
      ],
      'prefer-const': 'off',
      'no-trailing-spaces': 'error',
      'quote-props': ['error', 'consistent-as-needed'],
      'comma-dangle': [
        'error',
        'always-multiline',
      ],

      'space-infix-ops': 'error',
      'arrow-spacing': 'error',
      'keyword-spacing': 'error',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/ban-ts-comment': 'off',
    },
  },
]
