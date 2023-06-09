/** @type {import("prettier").Config} */
const config = {
  plugins: [require.resolve('prettier-plugin-tailwindcss')],
  singleAttributePerLine: true,
  tabWidth: 4,
}

module.exports = config
