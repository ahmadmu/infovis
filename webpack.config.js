
const path = require('path')
const webpack = require('webpack')

const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  mode: 'development',
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, './www'),
    publicPath: '/www/',
    filename: 'bundle.js'
  },

  watch: true,
  devtool: "inline-source-map",

  resolve: {  
    extensions: [".js", ".css", '.vue', ".ts"],
    alias: {
        // "jquery-ui" : path.join(__dirname, "node_modules/jquery-ui/ui"),
        "vue$"      : path.join(__dirname, "node_modules/vue/dist/vue.esm.js"),
        "p5"        : path.join(__dirname, "node_modules/p5/lib/p5.min.js")
    }
  },

  plugins:[
    new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery",
        "window.$": "jquery",

        p5: "p5"
    }),
    new VueLoaderPlugin()
  ],

  module: {
    rules: [
      { 
        test: /\.css$/, 
        use: [ "style-loader", "css-loader" ] 
      },
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              includePaths: ["src/style"]
              //data:  './src/style/_vars.scss'
            }
          }
        ]
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
            // the "scss" and "sass" values for the lang attribute to the right configs here.
            // other preprocessors should work out of the box, no loader config like this necessary.
            'scss': 'vue-style-loader!css-loader!sass-loader',
            'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax',
          }
          // other vue-loader options go here
        }
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          appendTsSuffixTo: [/\.vue$/],
        }
      },
      {
        test: /\.(jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      },
      { 
        test: /\.png$/, 
        use: [ "url-loader?mimetype=image/png" ] 
      },
      {
        test: /\.txt$/,
        use: "raw-loader"
      },
      {
        test: /\.html$/,
        use: "raw-loader" // maybe use html-loader instead, may need url-&file-loader for images
      },
    ]
  },
  resolve: {
    extensions: ['.ts', '.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  performance: {
    hints: false
  }
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}