const { join } = require('path');

const { createGlobPatternsForDependencies } = require('@nrwl/next/tailwind')

module.exports = {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
  purge: [join(__dirname, 'pages/**/*.{js, ts, jsx, tsx}'),
...createGlobPatternsForDependencies(__dirname)]
}
