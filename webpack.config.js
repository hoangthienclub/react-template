const HtmlWebPackPlugin = require( 'html-webpack-plugin' );
const path = require( 'path' );
module.exports = {
   context: __dirname,
   entry: './src/index.js',
   output: {
      path: path.resolve( __dirname, 'dist' ),
      filename: 'main.js',
      publicPath: '/',
   },
   devServer: {
      historyApiFallback: true
   },
   module: {
      rules: [
         {
            test: /\.js$/,
            use: 'babel-loader',
         },
         {
            test: /\.(scss|css)$/,
            use: [
               {
               loader: "style-loader"
               },
               {
                  loader: "css-loader"
               },
               {
                  loader: "sass-loader"
               }
            ]
         },
         {
            test: /\.(svg)?$/,
            use: 'file-loader'
         },
         {
            test: /\.(png|jpg|gif)$/,
            use: [
              {
                loader: 'url-loader',
                options: {
                  limit: 8192,
                  name(file) {
                    return './[path][name].[ext]';
                  }
                }
              }
            ]
         },
]
   },
   node: {
      console: true,
      fs: 'empty',
      net: 'empty',
      tls: 'empty'
   },
   plugins: [
      new HtmlWebPackPlugin({
         template: path.resolve( __dirname, 'public/index.html' ),
         filename: 'index.html'
      })
   ]
};
