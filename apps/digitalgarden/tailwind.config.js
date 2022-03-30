const { join } = require('path');

const { createGlobPatternsForDependencies } = require('@nrwl/next/tailwind');

module.exports = {
  content: [
    join(__dirname, 'pages/**/*.{js,ts,jsx,tsx}'),
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  purge: [
    join(__dirname, 'pages/**/*.{js,ts,jsx,tsx}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  presets: [require('../../tailwind-workspace-preset.js')],
  mode: 'jit'
};
