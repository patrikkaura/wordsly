// jest.config.js
const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig = {
  moduleDirectories: ["node_modules", "<rootDir>"],
  testEnvironment: "jest-environment-jsdom",
  moduleNameMapper: {
    // Handle module aliases (this will be automatically configured for you soon)
    "^@components/(.*)$": "<rootDir>/components/$1",
    "^@graphql/(.*)$": "<rootDir>/graphql/$1",
    "^@styles/(.*)$": "<rootDir>/styles/$1",
    "^@generated/(.*)$": "<rootDir>/generated/$1",
    "^@models/(.*)$": "<rootDir>/models/$1",
    "^@hooks/(.*)$": "<rootDir>/hooks/$1",
    "^types/(.*)$": "<rootDir>/types/$1",
    "^@config$": "<rootDir>/config/index",
  },
};

module.exports = createJestConfig(customJestConfig);
