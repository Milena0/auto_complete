module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js'
    },
    devServer: {
        inline: true,
        port: 3333,
        contentBase: "./public"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                query: {
                    presets: ['es2015', 'react'],
                    plugins: ['transform-class-properties']
                }

            }
        ]
    }
};
