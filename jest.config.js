module.exports = {
  roots: ['<rootDir>'],
  testEnvironment: 'jsdom',
  extensionsToTreatAsEsm: ['.ts', '.tsx'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'jsx'],
  testPathIgnorePatterns: [
    '<rootDir>[/\\\\](node_modules|.next|tests[/\\\\]e2e)[/\\\\]',
  ],
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(ts|tsx)$'],
  transform: {
    '^.+\\.(t|j)sx?$': ['@swc/jest', { configFile: './swcrc.json' }],
  },
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/test/__mocks__/fileMock.js',
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@com/(.*)$': '<rootDir>/src/components/$1',
    '^@share/(.*)$': '<rootDir>/src/shared/$1',
    '^@style/(.*)$': '<rootDir>/src/styles/$1',
    '^@util/(.*)$': '<rootDir>/src/utils/$1',
  },
};
