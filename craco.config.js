var path = require("path");

module.exports = {
  webpack: {
    alias: {
      "tourguidejs/tourguide.css": path.resolve(__dirname, "./src/modules/tourguide.js/tourguide.css"),
      "tourguidejs": path.resolve(__dirname, "./src/modules/tourguide.js/tourguide.esm.js"),
    },
  },
  jest: {
    configure: {
      moduleNameMapper: {
        "^tourguidejs/(.*)$": "<rootDir>/src/modules/tourguide.js/$1",
        "tourguidejs": "<rootDir>/src/modules/tourguide.js/tourguide.esm.js",
      },
    },
  },
};
