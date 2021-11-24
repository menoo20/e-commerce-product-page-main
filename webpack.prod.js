const path = require("path")
const webpack = require("webpack")
const htmlWebpackPlugin = require ("html-webpack-plugin")
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require('terser-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');

var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/client/index.js',
    output: {
        path: path.resolve(__dirname, "dist"),
        assetModuleFilename: 'images/[hash][ext][query]'
    },
    mode: 'development',
    devtool: 'source-map',
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin(), new CssMinimizerPlugin()],
      },
    module: {
        rules: [
                {
            test: '/\.js$/',
            exclude: /node_modules/,
            loader: "babel-loader"
                },
                {
                    test: /\.(png|jpe?g|gif|svg)$/i,
                    type:"asset/resource",
                    parser: {
                        dataUrlCondition:{
                            maxSize: 30 * 1024 ,
                        }
                    }
                },
                {
                    test: /\.css$/i,
                    use:  [MiniCssExtractPlugin.loader, "css-loader"]
                  },
        ]
},
plugins: [
    new htmlWebpackPlugin({
        template:"index.html",
 
    }),
    new CleanWebpackPlugin({
        cleanOnceBeforeBuildPatterns: [path.join(__dirname, "dist/**/*")],
        }),
        new MiniCssExtractPlugin({ filename: "[name].css" }),
        new CopyWebpackPlugin({
            patterns: [
                {from:'images',to:'images'} 
            ]
        }), 
        new WorkboxPlugin.GenerateSW()

]
}
