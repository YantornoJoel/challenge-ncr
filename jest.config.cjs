// jest.config.cjs
module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
  moduleNameMapper: {
    '\\.(css|less|scss)$': 'identity-obj-proxy',
  },
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  testMatch: ['**/__tests__/**/*.test.(js|jsx|ts|tsx)', '**/*.test.(js|jsx|ts|tsx)'],
  extensionsToTreatAsEsm: ['.ts', '.tsx'],
};
