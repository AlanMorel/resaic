const path = require("path");

module.exports = {
    productionSourceMap: false,
    filenameHashing: false,
    pages: {
        index: {
            entry: "app/core/main.js"
        }
    },
    configureWebpack: {
        output: {
            filename: "[name].js",
            chunkFilename: "[name].js"
        }
    },
    chainWebpack: config => {
        config.resolve.alias.set("@", path.resolve(__dirname, "app"));
        config.module.rules.delete("eslint");
    }
};
