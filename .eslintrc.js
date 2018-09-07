const ERROR = 2;
const WARN = 1;

module.exports = {
    extends: "standard",
    overrides: [
      {
        files: "**/*.js",
        env: {
          jest: true
        },
        plugins: [
          "jest"
        ],
        rules: {
          "jest/no-disabled-tests": "warn",
          "jest/no-focused-tests": "error",
          "jest/no-identical-title": "error",
          "jest/prefer-to-have-length": "warn",
          "jest/valid-expect": "error"
        }
      }
  ]
};
