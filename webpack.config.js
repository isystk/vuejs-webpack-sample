const src = __dirname + '/src';
const dist = __dirname + '/dist/'

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
                test: /\.css$/,
                use: [
                    "vue-style-loader",
                    "css-loader",
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
            }
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
      new VueLoaderPlugin()
    ],
    resolve: {
        extensions: [".vue", ".js"],
        alias: {
            "vue$": "vue/dist/vue.esm.js"
        }
    },
}