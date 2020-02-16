const src = __dirname + '/src';
const dist = __dirname + '/dist/'

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const VueLoaderPlugin = require("vue-loader/lib/plugin")

module.exports = {
    mode: "development",
    context: src,
    entry: {
      index: './index.js'
    },
    output: {
      path: dist,
      filename: 'js/[name].js'
    },
    devServer: {
      contentBase: dist,
      compress: true,
      port: 3000,
      open: true,
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: "vue-loader",
            },
            {
                test: /\.js$/,
                loader: "babel-loader",
            },
            {
                test: /\.scss$/,
                use: [
                { loader: MiniCssExtractPlugin.loader },
                { loader: 'css-loader' },
                { loader: 'sass-loader' },
                ],
            },
            {
                test: /\.(jpe?g|png|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath : 'images/',
                            publicPath : function(path){
                                return '../images/' + path;
                            },
                            esModule: false
                        }
                    }
                ]
            },
            {
                type: "javascript/auto",
                test: /\.json$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            outputPath : 'data/',
                            name: "[name].[ext]",
                        },
                    },
                ],
            },
        ]
    },
    plugins: [
      // distの中を初期化する
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: './assets/index.html', // Source
        filename: './index.html', // Dist
        inject: true,
        chunks: ['index'], // insert to the root of output folder
      }),
      new MiniCssExtractPlugin({ filename: 'css/[name].css' }),
      new VueLoaderPlugin()
    ],
    optimization: {
      minimizer: [new OptimizeCSSAssetsPlugin({})],
    },
    resolve: {
        extensions: [".vue", ".js"],
        alias: {
            "vue$": "vue/dist/vue.esm.js"
        }
    },
}