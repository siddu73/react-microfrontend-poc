const path = require("path");

module.exports = {
    entry: "./src/components/index.js",
    output: {
        path: __dirname + "/public",
        publicPath: "http://localhost:8081/public/",
        filename: "bundle.js",
        libraryTarget: "amd"
    },
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    mode: "development",
    devtool: "inline-source-map"
};
