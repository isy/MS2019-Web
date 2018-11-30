module.exports = {
  moduleFileExtensions: ['js', 'json', 'vue'],
  transform: {
    '.*\\.(vue)$': '<rootDir>/node_modules/vue-jest',
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest'
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.jsx?$',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    '^~/(.*)$': '<rootDir>/$1'
  },
  collectCoverageFrom: [
    'components/*.{js,vue}',
    'pages/*.{js,vue}',
    'layouts/*.{js,vue}',
    'store/*.{js,vue}',
    'plugins/*.{js,vue}',
    '!./tests/**',
    '!**/node_modules/**',
    '!**/.nuxt/**'
  ],
  coverageDirectory: './coverage/',
  collectCoverage: true
};
