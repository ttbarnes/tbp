import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
  dir: './'
});

/** @type {import('jest').Config} */
const config = {
  testEnvironment: 'jest-environment-jsdom',
  globals: {
    fetch: global.fetch
  },
  collectCoverageFrom: [
    './src/components/**',
    './src/helpers/**',
    './src/pages/**'
  ],
  roots: [
    './src/components',
    './src/helpers',
    './src/pages',
    './src/page-tests'
  ]
};

export default createJestConfig(config);
