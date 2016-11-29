const path = require('path');

module.exports = {
    entry: [
        './src/entry.js'
    ],
    output: {
        path: path.join(__dirname, 'dist/'),
        filename: 'bundle.js',
        publicPath: 'dist/'
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
                test: /\.(njk|nunjucks)$/,
                exclude: /node_modules/,
                loader: 'nunjucks-loader'
            }
        ]
    },
};
