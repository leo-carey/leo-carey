import globals from 'globals'
import pluginJs from '@eslint/js'
import pluginTs from 'typescript-eslint'
import pluginTsParser from '@typescript-eslint/parser'
import pluginVue from 'eslint-plugin-vue'
import prettier from 'eslint-plugin-prettier'
import prettierConfig from 'eslint-config-prettier'

export default [
  pluginJs.configs.recommended,
  ...pluginTs.configs.recommended,
  ...pluginTs.configs.strict,
  ...pluginTs.configs.stylistic,
  ...pluginVue.configs['flat/essential'],

  {
    ignores: [
      'node_modules/**',
      'dist',
      'eslint.config.js',
    ],

    files: [
      '**/*.ts',
    ],

    languageOptions: {
      parser: pluginTsParser,
      globals: globals.browser,
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        parser: "vue-eslint-parser",
        extraFileExtensions: [".vue"],
      },
    },

    plugins: {
      prettier,
      '@typescript-eslint/parser': pluginTsParser
    },

    rules: {
      ...prettierConfig.rules,
      'prettier/prettier': 'error',
      'quotes': ['warn', 'single'],
      'no-empty': ['warn', { allowEmptyCatch: true }],
      '@typescript-eslint/no-unused-vars': ['warn', { args: 'none' }],
      'curly': ['error', 'all'],
      'no-console': ['error', { allow: ['warn', 'error'] }],
      'id-length': ['error', { min: 2, exceptions: ['_'] }]
    }
  },

  {
    files: ['**/*.vue'],

    languageOptions: {
      globals: globals.browser,
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        parser: pluginTsParser,
      }
    },

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