import path from 'path'
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin' // 处理 html 的插件
import OpenBrowserPlugin from 'open-browser-webpack-plugin' // 自动打开浏览器的插件
import precss from 'precss' // 提供在 CSS 文件中使用 Sass 类型 Markup 的支持
import autoprefixer from 'autoprefixer' // 自动补全浏览器前缀的插件
import ExtractTextPlugin from "extract-text-webpack-plugin"
let proxy = require('http-proxy-middleware')

// const context = '/'

export default {
  entry: './app/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
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
      // {
      //     test:/\.(png|jpg|gif|svg)$/,
      //     use: 'url-loader?limit=10000&name=[name]-[hash].[ext]'
      // },
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
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(), // 热更新的插件
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: () => ([precss, autoprefixer]) // postcss 插件的配置
      }
    }),
    new ExtractTextPlugin('style.css'),
    // new ExtractTextPlugin("bundle.[hash:8].css"),
    new HtmlWebpackPlugin({ // 处理 html 的插件
      template: path.resolve(__dirname, 'index.html') // html 模板文件
    }),
    //new OpenBrowserPlugin({
    //    url: 'http://localhost:3000' // 浏览器自动打开的地址
    //})
  ],

  resolve: {
    extensions: ['.js', '.jsx', '.scss'],
    alias: {},
  },

  devtool: "source-map", // 开启 source-map ，方便调试

  devServer: {
    contentBase: path.resolve(__dirname, 'dist'), // devServer 的根目录
    compress: true, // 启用压缩（gzip）
    host: 'localhost',
    port: 3001, // devServer 的端口
    inline: true, // 内联模式
    hot: true, // 启用热更新
    // proxy: {
    //     '/': {
    //         target: 'http://localhost:3000',
    //         secure: false,
    //         changeOrigin: true
    //     }
    // }
  }
}
