const colors = require("@tailwindcss/ui/colors");
const theme = require("tailwindcss/defaultTheme");

module.exports = {
  theme: {
    extend: {},
    colors,
    screens: {
      xs: "480px",
      ...theme.screens,
    },
  },
  // https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
  variants: {},
  purge: {
    content: ["./demo/**/*.tsx", "./rollup/template.js"],
    mode: "all",
  },
};
