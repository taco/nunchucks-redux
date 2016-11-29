const path = require('path');

module.exports = {
    devtool: 'inline-source-map',
    devServer: {
      contentBase: path.join(__dirname, "dist"),
      compress: true,
      port: 9000,
      filename: 'bundle.js'
    },
    entry: [
        './src/entry.js'
    ],
    output: {
        path: path.join(__dirname, 'dist/'),
        filename: 'bundle.js',
        sourceMapFilename: 'debugging/[file].map',
        publicPath: 'http://localhost:9000/'
    },
    target: 'web',
    node: {
        fs: 'empty'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            },
            {
                test: /\.(njk|nunjucks)$/,
                exclude: /node_modules/,
                loader: 'nunjucks-loader'
            }
        ]
    },
};
