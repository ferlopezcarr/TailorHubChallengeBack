/** @type {import('ts-jest/dist/types').InitialOptionTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  moduleNameMapper: {
    "@core/(.*)": "<rootDir>/src/core/$1",
  },
};
