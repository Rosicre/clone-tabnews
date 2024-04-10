const dotenv = require("dotenv");
dotenv.config({
  path: ".env.development",
});

const nexJest = require("next/jest");

const createJestConfig = nexJest({
  dir: ".",
});
const jestConfig = createJestConfig({
  moduleDirectories: ["node_modules", "<rootDir>"],
});

module.exports = jestConfig;
