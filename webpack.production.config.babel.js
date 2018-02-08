import path from 'path'
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin' // 处理 html 的插件
import CleanWebpackPlugin from 'clean-webpack-plugin' // 清理文件夹
import ExtractTextPlugin from 'extract-text-webpack-plugin-2' // 提取 css，此插件的 1.0.0 版本不能在 webpack2 中使用，请使用该插件的 2.0.0 版本
import precss from 'precss' // 提供在 CSS 文件中使用 Sass 类型 Markup 的支持
import autoprefixer from 'autoprefixer' // 自动补全浏览器前缀的插件

export default {
    entry: {
        app: './app/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name]-[hash:8].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: [
                    path.resolve(__dirname, 'app')
                ],
                exclude: [
                    path.resolve(__dirname, 'node_modules')
                ],
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({ fallbackLoader: 'style-loader', loader: 'css-loader!postcss-loader' })
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'url-loader?limit=10000&name=[name]-[hash].[ext]'
            },
            {
                test: /\.html?$/,
                loader:'file?name=html/[name].[ext]'
            }
        ]
    },

    plugins: [
        // webpack2 中不在需要显式配置 OccurrenceOrderPlugin ，默认开启此插件
        // new webpack.optimize.OccurrenceOrderPlugin(), //根据模块调用次数，给模块分配ids，常被调用的ids分配更短的id，使得ids可预测，降低文件大小
        new webpack.optimize.UglifyJsPlugin(), // 压缩 js 的插件
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: () => ([precss, autoprefixer]) // postcss 插件的配置
        }
}),
new ExtractTextPlugin({
    filename: '[name]-[hash:8].css'
}),
    new CleanWebpackPlugin(['dist']), // 清空目录
    new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'index.html')
    })
]
}