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

        const types = ["vue-modules", "vue", "normal-modules", "normal"];
        types.forEach(type => addStyleResource(config.module.rule("stylus").oneOf(type)));
    }
};

addStyleResource = rule => {
    rule.use("style-resource").loader("style-resources-loader").options({
        patterns: [
            path.resolve(__dirname, "app/styles/variables.styl"),
            path.resolve(__dirname, "app/styles/mixins.styl")
        ]
    })
}
