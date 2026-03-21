//  @ts-check

/** @type {import('prettier').Config} */
const config = {
  printWidth: 100,
  tabWidth: 2,
  semi: false,
  singleQuote: true,
  trailingComma: 'all',
  plugins: ['prettier-plugin-tailwindcss'],
  tailwindPreserveDuplicates: true,
}

export default config
