var webpack = require('webpack');
module.exports = {
    // entry: [
    //     'webpack/hot/only-dev-server',
    //    // "./reactTest/test2.js",
    //     "./js/app.js"
    //
    // ],
    entry: {
      //  server:'webpack/hot/only-dev-server',
        test2: './reactTest/test2.js',
        app: './js/app.js'
    },
    output: {
        path: './build',
        filename: "[name].min.js"//bundle.js
    },
    module: {
        loaders: [
            { test: /\.js?$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/ },
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
            { test: /\.css$/, loader: "style!css" }
        ]
    },
    resolve:{
        extensions:['','.js','.json']//extensions数组中用于配置程序可以自行补全哪些后缀
    },                   //比如说我们要require一个common.js文件，添加了这个配置我们只要写：require('common')；就可以了
    plugins: [
        new webpack.NoErrorsPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
};