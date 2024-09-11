// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const path = require("path");

function addStyleResource(rule) {
  rule
    .use("style-resource")
    .loader("style-resources-loader")
    .options({
      patterns: [
        path.resolve(__dirname, "./src/assets/scss/typography.scss"),
        path.resolve(__dirname, "./src/assets/scss/variables.scss"),
      ],
    });
}

module.exports = {
  // siteUrl: 'https://dare-mcadewole.github.io',
  // pathPrefix: '/njtd-site',
  siteName: "Nigerian Journal of Technological Development",
  siteDescription:
    "Nigerian Journal of Technological Development. ... NJTD is currently indexed in Google Scholar, AJOL, DOAJ, DRJI, Journal Factor, Stanford ...",
  host: process.env.HOST || "0.0.0.0",
  port: process.env.PORT || 80,
  plugins: [
    {
      use: "gridsome-plugin-tailwindcss2",
      options: {
        tailwindConfigFile: "./tailwind.config.js",
        mainCssFile: "./src/assets/css/main.css",
      },
    },
  ],

  chainWebpack(config) {
    // Load variables for all vue-files
    const types = ["vue-modules", "vue", "normal-modules", "normal"];

    // or if you use scss
    types.forEach((type) => {
      addStyleResource(config.module.rule("scss").oneOf(type));
    });
  },
};
