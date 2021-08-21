const withPlugins = require("next-compose-plugins");
const withImages = require("next-images");
const withSass = require("@zeit/next-sass");
const webpack = require("webpack");
const path = require("path");
const withCss=require('@zeit/next-css')
//const { i18n } = require('./next-i18next.config');


module.exports = withPlugins([[withImages]], {
  webpack(config, options) {
    config.resolve.modules.push(path.resolve("./"));
    
    return config;
  },
  env: {
    mongodburl:"mongodb+srv://grey:Vermilion9%23@cluster0.j4dir.mongodb.net/users?retryWrites=true&w=majority"
  },
  typescript: {
    
    ignoreBuildErrors: true,
  },
  
});
// module.exports = {
//   typescript: {
//     // !! WARN !!
//     // Dangerously allow production builds to successfully complete even if
//     // your project has type errors.
//     // !! WARN !!
//     ignoreBuildErrors: true,
//   },
// }
/*module.exports = {
  env: {
      mongodburl: "mongodb+srv://grey:Vermilion9#@cluster0.j4dir.mongodb.net/user?retryWrites=true&w=majority",
  }
};*/
