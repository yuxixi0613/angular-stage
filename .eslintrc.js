const prettierConfig = require('./.prettierrc.js');
/*https://blog.miniasp.com/post/2021/08/29/Angular-ESLint-with-so-much-details*/
/*https://github.com/angular-eslint/angular-eslint/tree/main/packages/eslint-plugin/docs/rules*/
/*https://www.wenjiangs.com/doc/eslint-docs-rules-no-redeclare*/
/*https://eslint.org/docs/latest/user-guide/getting-started*/

/**
 * @typedef {import("eslint").ESLint.ConfigData} ESLintConfig
 * @typedef {import("eslint/rules").ESLintRules} ESLintRules
 */

/** @type {ESLintConfig} */
module.exports = {
  root: true,
  parserOptions: { ecmaVersion: 2021 },
  ignorePatterns: ['projects/**/*'],
  rules: {},
  overrides: [
    {
      files: ['*.ts'],
      parser: '@typescript-eslint/parser',
      extends: [
        // "eslint:recommended",
        // "plugin:@typescript-eslint/recommended",
        'plugin:@angular-eslint/recommended',
        'plugin:@angular-eslint/template/process-inline-templates',
        'plugin:prettier/recommended' // <--- here we inherit from the recommended setup from eslint-plugin-prettier for TS
      ],
      /** @type {ESLintRules} */
      rules: {
        'default-case': 'warn',
        'no-unused-vars': 'warn',
        'no-empty-function': 'warn',

        'prettier/prettier': ['warn', prettierConfig],
        '@angular-eslint/directive-selector': [
          'error',
          {
            type: 'attribute',
            prefix: 'app',
            style: 'camelCase'
          }
        ],
        '@angular-eslint/component-selector': [
          'error',
          {
            type: 'element',
            prefix: 'app',
            style: 'kebab-case'
          }
        ]
      }
    },
    {
      files: ['*.html'],
      extends: [
        'plugin:@angular-eslint/template/recommended'
        // "plugin:@angular-eslint/template/accessibility"
      ],
      rules: {}
    },
    {
      files: ['*.html'],
      excludedFiles: ['*inline-template-*.component.html'],
      extends: ['plugin:prettier/recommended'],
      rules: {
        'prettier/prettier': ['warn', { parser: 'angular' }]
      }
    }
  ]
};
