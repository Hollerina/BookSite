module.exports = {
  presets: [
    [
      "@babel/preset-react",
      {
        runtime: "automatic",
      },
    ],
  ],
  plugins: [
    ["babel-plugin-transform-minify-gql-template-literals"],
    [
      "@emotion",
      {
        sourceMap: false,
        autoLabel: "always",
        labelFormat: "[local]--[filename]",
      },
    ],
  ],
};
