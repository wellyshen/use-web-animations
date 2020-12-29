module.exports = {
  preset: "ts-jest",
  collectCoverageFrom: ["src/*.(ts|tsx)", "!src/index.ts", "!src/*.d.ts"],
};
