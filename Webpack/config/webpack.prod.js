const path = require('path');
const os = require('os');
const TerserPlugin = require("terser-webpack-plugin");
const ESLintWebpackPlugin = require("eslint-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

const threads = os.cpus().length;

module.exports = {
    // 入口
    entry: './src/main.js',
    // 输出
    output: {
        // 代表绝对路径
        path: path.resolve(__dirname, "../dist"),
        // 文件名
        filename: 'js/main.js',
        // 自动清空
        clean: true,
    },

    // 加载器
    module: {
        rules: [
            {
                oneOf: [
                    {
                        test: /\.css$/,
                        use: [MiniCssExtractPlugin.loader, "css-loader"],
                    },
                    {
                        test: /\.less$/,
                        use: [MiniCssExtractPlugin.loader, "css-loader", "less-loader"]
                    },
                    {
                        test: /\.sass$/,
                        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
                    },
                    {
                        test: /\.(png|jpe?g|gif|webp)$/,
                        type: "asset",
                        parser: {
                            dataUrlCondition: {
                                maxSize: 10 * 1024 // 小于10kb的图片会被base64处理
                            }
                        },
                        generator: {
                            filename: "images/[hash:10][ext][query]",
                        }
                    },
                    {
                        test: /\.(ttf|woff2?|mp3|mp4|avi)$/,
                        type: "asset/resource",
                        generator: {
                            filename: "media/[hash:10][ext][query]",
                        }
                    },
                    {
                        test: /\.js$/,
                        exclude: /node_modules/, // 排除node_modules代码不编译
                        use: [
                            {
                                loader: 'thread-loader',
                                options: {
                                    works: threads
                                }
                            },
                            {
                                loader: "babel-loader",
                                options: {
                                    cacheDirectory: true,
                                    cacheCompression: false,
                                }
                            }
                        ]

                    },
                ]
            }
        ]
    },
    // 插件
    plugins: [
        new ESLintWebpackPlugin({
            // 指定检查文件的根目录
            context: path.resolve(__dirname, "../src"),
            exclude: "node_modules",
            cache: true,
            cacheLocation: path.resolve(__dirname, "../node_modules/.cache/eslitCache"),
            threads,
        }),
        new HtmlWebpackPlugin({
            // 以 public/index.html 为模板创建文件
            // 新的html文件有两个特点：1. 内容和源文件一致 2. 自动引入打包生成的js等资源
            template: path.resolve(__dirname, "../public/index.html"),
        }),
        new MiniCssExtractPlugin({
            filename: "css/main.css"
        }),
        new CssMinimizerPlugin(),
        new TerserPlugin({
            parallel: threads
        })
    ],
    // 模式
    mode: "production"
}