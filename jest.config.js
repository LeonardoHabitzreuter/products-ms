module.exports = {
  transform: { "\\.ts$": ['ts-jest'] },
  setupFiles: ["./jest-setup.ts"],
  moduleNameMapper: {
    '^~/modules(.*)$': '<rootDir>/src/modules/$1',
    '^~/common(.*)$': '<rootDir>/src/common/$1',
    '^~/lib(.*)$': '<rootDir>/src/lib/$1',
    '^~/middlewares(.*)$': '<rootDir>/src/middlewares/$1'
  },
  collectCoverageFrom: ['src/**/*.ts']
}
