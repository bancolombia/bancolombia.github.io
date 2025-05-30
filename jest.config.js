const path = require("path");
const rootDir = path.join(__dirname);

module.exports = {
  testEnvironment: "jsdom",
  transform: {
    '^.+\\.[jt]sx?$': [
      '@swc/jest',
      {
        jsc: {
          parser: {
            syntax: 'typescript',
            tsx: true,
          },
          target: 'es2020',
        },
      },
    ],
  },
  moduleNameMapper: {
    "^.+\\.(css|jpe?g|png|svg|webp)$": "<rootDir>/jest/emptyModule.js",
    "^@theme/(.*)$": "<rootDir>/jest/emptyModule.js",
    '^@site/(.*)$': '<rootDir>/jest/emptyModule.js',
    '@docusaurus/(use.*)':'<rootDir>/jest/mockUseDocusarusContext.js',
    '^@docusaurus/Link$': '<rootDir>/jest/mockDocusaurusLink.js',
    '^@docusaurus/router$': '<rootDir>/jest/mockDocusaurusRedirect.js',
  },
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/build/',
    '<rootDir>/jest/',
    '<rootDir>/coverage/',
    '<rootDir>/docs/',
    '<rootDir>/pages/',
    '<rootDir>/.docusaurus',    
  ],
  collectCoverage: true,
  coverageDirectory: path.join(`${rootDir}`, '/coverage/'),      //  Ruta donde quedará los reportes
  coverageReporters: ["html", "json", "lcov", "text", "clover"], // Tipos de reportes que se generan
  reporters: [
    "default",
    ["jest-junit", {outputDirectory: "./coverage/", outputName: "junit.xml"}],
    ["jest-html-reporters", {publicPath: "./coverage/", filename: "report-jest.html"}],
    "jest-sonar"
  ],// Dependencias que usaremos para los reportes
};