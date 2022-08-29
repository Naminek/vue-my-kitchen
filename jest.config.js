const esModules = [
  'vuex-composition-helpers',
  'validator/es/lib/',
  'lodash-es',
].join('|')

module.exports = {
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    '^~/(.*)$': '<rootDir>/$1',
    '^vue$': 'vue/dist/vue.common.js'
  },
  moduleFileExtensions: [
    'ts',
    'js',
    'vue',
    'json'
  ],
  transform: {
    '^.+\\.ts$': 'ts-jest',
    '^.+\\.js$': 'babel-jest',
    '.*\\.(vue)$': 'vue-jest'
  },
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/composables/**/*.ts',
    '<rootDir>/components/**/*.vue',
    '<rootDir>/pages/**/*.vue',
    '<rootDir>/store/**/*.ts',
    '<rootDir>/models/**/*.ts'
  ],
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: [
    '<rootDir>/test/setup.ts'
  ],
  snapshotSerializers: [
    '<rootDir>/node_modules/jest-serializer-vue-tjw'
  ],
  transformIgnorePatterns: [`node_modules/(?!${esModules})`]
}

// const esModules = [
//   'vuex-composition-helpers',
//   'validator/es/lib/',
//   'lodash-es',
// ].join('|')

// module.exports = {
//   testEnvironment: 'jsdom',
//   moduleNameMapper: {
//     '^~/(.*)$': '<rootDir>/$1',
//     '^.+.(css|styl|less|sass|scss|png|jpg|webp|svg|ttf|woff|woff2)$': 'jest-transform-stub'
//   },
//   transformIgnorePatterns: [`node_modules/(?!${esModules})`],
//   modulePathIgnorePatterns: ['<rootDir>/cypress/'],
//   globals: {
//     'ts-jest': {
//       isolatedModules: true
//     }
//   }
// }
