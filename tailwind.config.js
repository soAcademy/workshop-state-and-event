/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    // "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        prompt: ["Prompt", ...defaultTheme.fontFamily.sans],
        nstl: ["'Noto Sans Thai Looped'", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  // plugins: [require("flowbite/plugin")],
  safelist: [
    {
      pattern:
        /bg-(slate|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-400/,
    },
  ],
};
