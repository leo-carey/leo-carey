import globals from 'globals'
import pluginJs from '@eslint/js'
import pluginTs from 'typescript-eslint'
import pluginVue from 'eslint-plugin-vue'
import prettier from 'eslint-plugin-prettier'
import prettierConfig from 'eslint-config-prettier'

export default [
  pluginJs.configs.recommended,
  ...pluginTs.configs.recommended,
  ...pluginVue.configs['flat/essential'],

  {
    ignores: [
      'node_modules/**',
      'dist',
      'eslint.config.js',
    ],

    files: [
      'src/**/*.{ts,vue}',
      'src/**/**/*.{ts,vue}',
      'src/**/**/**/*.{ts,vue}'
    ],

    languageOptions: {
      globals: globals.browser,
      ecmaVersion: 'latest',
      sourceType: 'module',
    },

    plugins: {
      prettier,
    },

    rules: {
      ...prettierConfig.rules,
      'prettier/prettier': 'error',
      'quotes': ['warn', 'single'],
      'no-empty': ['warn', { allowEmptyCatch: true }],
      'no-unused-vars': ['warn', { args: 'none' }],
      'curly': ['error', 'all'],
      'no-console': ['error', { allow: ['warn', 'error'] }],
      'id-length': ['error', { min: 2, exceptions: ['_'] }]
    }
  },

  {
    files: ['src/**/*.vue', 'src/**/**/*.vue', 'src/**/**/**/*.vue'],

    plugins: {
      vue: pluginVue,
      prettier,
    },

    rules: {
      ...prettierConfig.rules,
      'prettier/prettier': 'error',
      'vue/require-valid-default-prop': 'off',
      'vue/multi-word-component-names': 'off',
      'vue/no-deprecated-slot-attribute': 'off',
      'vue/no-multiple-template-root': 'error',
      'vue/no-unused-vars': 'error',
      'vue/component-tags-order': ['error', {
        'order': [
          'script',
          'template',
          'style'
        ]
      }],
      'vue/component-api-style': ['error',
        ['script-setup', 'composition']
      ]
    },
  }
]