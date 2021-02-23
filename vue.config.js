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
    css: {
        loaderOptions: {
            sass: {
                additionalData: `
                    @import "~@/styles/variables.scss";
                    @import "~@/styles/mixins.scss";
                `
            }
        }
    },
    chainWebpack: config => {
        config.resolve.alias.set("@", path.resolve(__dirname, "app"));
    }
};
