module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  collectCoverageFrom: ["src/*.(ts|tsx)", "!src/index.ts", "!src/*.d.ts"],
};
