const path = require('path');
module.exports = {
    entry: {
        index: './src/index.js'
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve('./build'),
    },
    // --------- 新增以下內容 -----------
    module: {
        rules: [
            {
                test: /.js$/,
                exclude: /node_modules/, //不編譯的檔案
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react', '@babel/preset-env']
                    }
                }
            },
        ]
    },

    devServer: {
        static: './build', // 本來打包完的檔案位置
        port: 8080 // 預覽網頁要跑在哪個port
    },
    mode: 'development',
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    }
};