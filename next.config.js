const withTypescript = require("@zeit/next-typescript");
const withSass = require("@zeit/next-sass");
const withCss = require("@zeit/next-css");
const withSvgr = require("next-svgr");

module.exports = withTypescript(
  withSvgr(
    withCss(
      withSass({
        webpack(config, options) {
          return config;
        },
        cssModules: true,
        sassLoaderOptions: {},
      })
    )
  )
);
