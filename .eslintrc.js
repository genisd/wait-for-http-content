module.exports = {
  root: true,
  env: {
      node: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
      project: 'tsconfig.json',
      sourceType: 'module',
      tsconfigRootDir: __dirname, // prevents eslint error "Cannot read file 'tsconfig.json'" in workspaces
  },
  ignorePatterns: ['.eslintrc.js', 'schematics/*'],
  plugins: ['@typescript-eslint/eslint-plugin', 'import', 'prettier', 'jest'],
  extends: ['airbnb-base', 'airbnb-typescript/base', 'prettier'],
  rules: {
      'import/extensions': 'off',
      '@typescript-eslint/indent': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': [
          'error',
          {
              args: 'none',
              vars: 'all',
          },
      ],
      '@typescript-eslint/no-use-before-define': 'warn',
      '@typescript-eslint/no-useless-constructor': 'off',
      'class-methods-use-this': 'off',
      'consistent-return': 'error',
      'import/first': 'off',
      'import/no-cycle': 'off',
      'import/no-unresolved': 'off',
      'import/no-extraneous-dependencies': [
          'error',
          {
              devDependencies: [
                  'apps/**/test/**',
                  'libs/**/test/**',
                  '**/*e2e-spec.ts',
                  '**/*int-spec.ts',
                  '**/*.spec.ts',
                  '**/test-utils.ts',
                  'integration-tests/**',
                  'infrastructure/**',
              ],
          },
      ],
      'import/prefer-default-export': 'off',
      'import/no-import-module-exports': 'off',
      'max-len': [
          'error',
          {
              code: 120,
              ignorePattern: 'import |export |`.*`|\'.*\'|".*"|// .*|\\* .*',
          },
      ],
      'max-classes-per-file': 'off',
      'no-await-in-loop': 'off',
      'no-continue': 'off',
      'no-else-return': 'off',
      'no-minmin': 'off',
      'no-multi-str': 'off',
      'no-param-reassign': [
          'warn',
          {
              props: false,
          },
      ],
      'no-plusplus': 'off',
      'no-prototype-builtins': 'off',
      'no-restricted-syntax': 'off',
      'object-curly-newline': 'off',
      'no-underscore-dangle': 'off', // conflicts with @typescript-eslint/naming-convention
      'prettier/prettier': 'error',
      'default-param-last': 'off',
      '@typescript-eslint/default-param-last': ['error'],
      'prefer-const': ['error', { destructuring: 'all' }],
      '@typescript-eslint/no-floating-promises': 'error',
      '@typescript-eslint/no-misused-promises': 'error',
      'no-void': [
          'error',
          {
              allowAsStatement: true,
          },
      ],
      'no-constant-condition': ['error', { checkLoops: false }],
      'new-cap': 'off',
      'jest/no-focused-tests': 'error',
      'prefer-destructuring': 'off',
      'no-console': 'off',
    },
  overrides: [
      {
          files: ['*spec.ts', '*spec-data.ts', 'test/**/*.ts', 'libs/test-utils/**/*.ts'],
          rules: {
              '@typescript-eslint/no-explicit-any': 'off',
              'no-console': 'off',
              'prettier/prettier': 'off',
              '@typescript-eslint/no-use-before-define': 'off',
              'import/first': 'off',
              'arrow-body-style': 'off',
              '@typescript-eslint/dot-notation': 'off',
              'import/no-extraneous-dependencies': [
                  'error',
                  {
                      devDependencies: true,
                  },
              ],
          },
      },
      {
          files: ['main.ts'],
          rules: {
              'import/first': 'off',
              'global-require': 'off',
              '@typescript-eslint/no-floating-promises': 'off',
          },
      },
  ],
};
