module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
    'unused-imports', // Auto remove unused imports
    'sort-imports-es6-autofix', // Auto sort the import order
    'prettier',
  ],
  extends: [
    // ESLint default recommending rules
    'eslint:recommended',
    // ESLint default recommending rules for typescript
    'plugin:@typescript-eslint/recommended',
    // Airbnb JavaScript style
    'airbnb',
    // Airbnb JavaScript style for typescript
    'airbnb-typescript',
    // Next.js recommended linting rules
    'plugin:@next/next/recommended',
    // Should add after React 17
    'plugin:react/jsx-runtime',
    // IMPORTANT: add this to the last of the extends to override ESLint rules
    'plugin:prettier/recommended',
  ],
  root: true,
  env: {
    es6: true,
    browser: true,
    jest: true,
    node: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    // Allow to import CSS in _app.tsx
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    // Conflict with alias path
    'import/extensions': 'off',
    // Conflict with alias path
    'import/no-unresolved': 'off',
    // Sort props in the component
    'react/jsx-sort-props': [
      'error',
      {
        callbacksLast: true,
        shorthandFirst: true,
        shorthandLast: false,
        ignoreCase: false,
        noSortAlphabetically: false,
        reservedFirst: true,
      },
    ],
    // Not enforce all attribute in component props should be used
    'react/require-default-props': 'off',
    // Conflict with Next.js default implementation in _app.tsx
    'react/jsx-props-no-spreading': 'off',
    // next-i18n-next.config.js
    '@typescript-eslint/no-var-requires': 'off',
    // For declaring props interface
    '@typescript-eslint/no-empty-interface': 'off',
    // Allow underscore for special purpose
    'no-underscore-dangle': 'off',
    // Varialbes / Types naming rules
    '@typescript-eslint/naming-convention': [
      'error',
      // Enforce that all variables, functions and properties follow are camelCase or PascalCase
      {
        selector: 'variableLike',
        format: ['camelCase', 'PascalCase'],
        leadingUnderscore: 'allow',
      },
      // Enforce that boolean variables are prefixed with 'is' or 'has'
      // when added prefix, ESLint will trim the prefix and check the format, so PascalCase needed
      {
        selector: 'variable',
        format: ['PascalCase'],
        types: ['boolean'],
        prefix: ['is', 'has'],
        leadingUnderscore: 'allow',
      },
      // Allow that const variables can be UPPER_CASE or camelCase
      {
        selector: 'variable',
        modifiers: ['const'],
        format: ['camelCase', 'UPPER_CASE'],
        leadingUnderscore: 'allow',
      },
      // Enforce that class, interface, type and enum  follow are PascalCase
      { selector: 'typeLike', format: ['PascalCase'] },
      // Enforce that interface names do not begin with an I
      {
        selector: 'interface',
        format: ['PascalCase'],
        custom: {
          regex: '^I[A-Z]',
          match: false,
        },
      },
      { selector: 'enumMember', format: ['UPPER_CASE'] },
    ],
    // Conflict with unused-imports plugin
    '@typescript-eslint/no-unused-vars': 'off',
    // Example setting of unused-imports plugin
    'unused-imports/no-unused-imports': 'warn',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
    // Conflict with sort-imports-es6 plugin
    'import/order': 'off',
    // Example setting of sort-imports-es6 plugin
    'sort-imports-es6-autofix/sort-imports-es6': [
      'warn',
      {
        ignoreCase: false,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
      },
    ],
    // For Typescript, it is better not to use default export: https://stackoverflow.com/a/33307487/11440474
    'import/prefer-default-export': 'off',
  },
};
