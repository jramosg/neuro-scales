// .prettierrc.mjs
/** @type {import("prettier").Config} */
export default {
  trailingComma: 'es5',
  semi: false,
  singleQuote: true,
  jsxSingleQuote: true,
  printWidth: 80,
  tabWidth: 2,
  plugins: ['prettier-plugin-astro'],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
};
