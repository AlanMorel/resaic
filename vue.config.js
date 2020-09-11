const path = require("path");

module.exports = {
    productionSourceMap: false,
    filenameHashing: false,
    pages: {
        index: {
            entry: "app/src/main.js"
        }
    },
    configureWebpack: {
        output: {
            filename: "[name].js",
            chunkFilename: "[name].js"
        }
    },
    chainWebpack: config => {
        config.resolve.alias.set("@", path.resolve(__dirname, "app/src/"));
    }
};
