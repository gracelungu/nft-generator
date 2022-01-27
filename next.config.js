const withTypescript = require("@zeit/next-typescript");
const withSass = require("@zeit/next-sass");
const withCss = require("@zeit/next-css");
const withSvgr = require("next-svgr");

if (
  process.env.LD_LIBRARY_PATH == null ||
  !process.env.LD_LIBRARY_PATH.includes(
    `${process.env.PWD}/node_modules/canvas/build/Release:`
  )
) {
  process.env.LD_LIBRARY_PATH = `${
    process.env.PWD
  }/node_modules/canvas/build/Release:${process.env.LD_LIBRARY_PATH || ""}`;
}

module.exports = {
  typescript: {
    ignoreBuildErrors: true,
  },
  ...withTypescript(
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
  ),
};
