//  @ts-check

import { tanstackConfig } from '@tanstack/eslint-config'
import simpleImportSort from 'eslint-plugin-simple-import-sort'

export default [
  ...tanstackConfig,
  {
    plugins: {
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      // JavaScript
      'import/no-cycle': 'off',
      'import/order': 'off',
      'sort-imports': 'off',

      // TypeScript
      '@typescript-eslint/array-type': 'off',
      '@typescript-eslint/require-await': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/no-unnecessary-condition': 'off',

      // simple import sort
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',

      // Package
      'pnpm/json-enforce-catalog': 'off',
    },
  },
  {
    ignores: ['eslint.config.js', 'prettier.config.js'],
  },
]
