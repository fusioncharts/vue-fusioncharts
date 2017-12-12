import webpack from 'webpack';

const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
const libraryName = 'VueFusionCharts';

export default {
    entry: {
        'vue-fusioncharts': __dirname + '/src/index.js',
        'vue-fusioncharts.min': __dirname + '/src/index.js'
    },
    devtool: 'source-map',
    output: {
        path: __dirname + '/dist',
        filename: '[name].js',
        library: libraryName,
        libraryTarget: 'umd'
    },
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                loader: 'babel-loader',
                exclude: /(node_modules|bower_components)/
            },
            {
                test: /(\.jsx|\.js)$/,
                loader: 'eslint-loader',
                exclude: /node_modules/
            }
        ]
    },
    externals: {
        fusioncharts: {
            commonjs2: 'fusioncharts',
            commonjs: 'fusioncharts',
            amd: 'fusioncharts',
            root: 'FusionCharts'
        }
    },
    plugins: [
        new UglifyJsPlugin({
            include: 'vue-fusioncharts.min.js',
            minimize: true
        })
    ]
};
