const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");


module.exports = {
    mode: "development",
    entry: {
        main: path.resolve(__dirname, "src/js/main.js"),
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "js/[name]-[contenthash:8].js",
        assetModuleFilename: "assets/[name][ext]",
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"],
                // use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                    }
                },
            },
            {
                test: /\.(jpe?g|png|svg|gif)$/,
                type: "asset/resource",
                // generator: {
                //     filename: 'assets/[name][ext]',
                // }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Space tourism",
            filename: "index.html",
            template: "src/pages/index.html",
        }),
        new HtmlWebpackPlugin({
            title: "Space tourism - Destination",
            filename: "destination.html",
            template: "src/pages/destination.html",
        }),
        new MiniCssExtractPlugin({
            filename: "css/[name]-[contenthash:8].css",
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: "src/assets", to: "assets", noErrorOnMissing: true,
                },
            ],
        }),
    ],
    devtool: "source-map",
    devServer: {
        static: {
            directory: path.resolve(__dirname, "dist"),
        },
        port: 3000,
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true,
    }
}