const path = require("path");
const webpack = require("webpack");
const htmlWebpackPlugin = require ("html-webpack-plugin");
var CopyWebpackPlugin = require("copy-webpack-plugin");
module.exports = {
    entry: './src/client/index.js',
    mode: 'development',
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname, "dist"),
        assetModuleFilename: 'images/[hash][ext][query]'
    },
    module: {
        rules: [
                {
            test: '/\.js$/',
            exclude: /node_modules/,
            loader: "babel-loader"
                },
                {
                    test: /\.css$/i,
                    use: ["style-loader", "css-loader"],
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
        ]
},
plugins: [
    new htmlWebpackPlugin({
        template:"index.html",
        filename: "index.html"
    }),
    new CopyWebpackPlugin({
        patterns: [
            {from:'images',to:'images'} 
        ]
       
    }), 
]
};
