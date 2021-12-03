
const { defaults } = require('jest-config');

module.exports = {
  transform: {
    // "^.+\\.tsx?$": "ts-jest",
    "^.+\\.tsx?$": "babel-jest",
    // "^.+\\.mjs$": "babel-jest",
  },
  testPathIgnorePatterns: ["<rootDir>/build/", "<rootDir>/node_modules/", "<rootDir>/dist/", "<rootDir>/src/router/"],
  coveragePathIgnorePatterns: ["<rootDir>/build/", "<rootDir>/node_modules/", "<rootDir>/dist/", "<rootDir>/src/router/"],
  preset: '@vue/cli-plugin-unit-jest',
  verbose: true,
  moduleFileExtensions: ["js", "vue"],
  collectCoverage: true,
  collectCoverageFrom: [
    "**/*.{js,jsx,vue}",
    "!**/node_modules/**",
    "!**/vendor/**",
    "!**/plugins/**",
    "!**/coverage/**",
    "!**/*.config.js",
    "!**/main.js",
    "!**/store/index.js",
    "!**/nf_*",
  ],
}

