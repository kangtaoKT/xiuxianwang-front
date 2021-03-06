import path from 'path'
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin' // 处理 html 的插件
import CleanWebpackPlugin from 'clean-webpack-plugin' // 清理文件夹
import ExtractTextPlugin from 'extract-text-webpack-plugin' // 提取 css，此插件的 1.0.0 版本不能在 webpack2 中使用，请使用该插件的 2.0.0 版本
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
        test: /\.js|jsx$/,
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
        // loader: 'style-loader!css-loader!postcss-loader'
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ['css-loader']
        })
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          //resolve-url-loader may be chained before sass-loader if necessary
          // use: ['css-loader', 'sass-loader']
          use: ['css-loader?modules&localIdentName=[local]_[hash:base64:6]', 'postcss-loader', 'sass-loader', 'resolve-url-loader', 'sass-loader?sourceMap']
        })
      },
      //{
      //  test: /\.(png|jpg|gif|svg)$/,
      //  loader: 'url-loader?limit=10000&name=[name]-[hash].[ext]'
      //},
      {
        test: /\.(woff|woff2|ttf|svg|eot)(\?t=[\s\S]+)?$/,
        use: ['url-loader?limit=1000&name=files/[md5:hash:base64:10].[ext]']
      },
      {
        test: /\.(jpg|png|gif|swf)$/,
        use: ['url-loader?limit=1000&name=files/[md5:hash:base64:10].[ext]']
      },
      {
        test: /\.json$/,
        use: ['json-loader']
      }
      //{
      //  test: /\.html?$/,
      //  use: 'file-loader?name=html/[name].[ext]'
      //}
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
