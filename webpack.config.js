const path = require('path')
const autoprefixer = require('autoprefixer')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
    mode: 'development',
    target: 'web',
    entry: {
        index: path.resolve(__dirname, 'src/index.js'),
        formdemo: path.resolve(__dirname, 'src/documentation/formdemo/formdemo.js'),
        projectissues: path.resolve(__dirname, 'src/documentation/projectissues/projectIssues.js'),
        projecttestcases: path.resolve(__dirname, 'src/documentation/projecttestcases/projectTestCases.js'),

        topAppBar: path.resolve(__dirname, 'src/component/topAppBar.js'),
        nav: path.resolve(__dirname, 'src/component/nav.js'),
        buttons: path.resolve(__dirname, 'src/documentation/buttons/buttons.js'),
        checkbox: path.resolve(__dirname, 'src/documentation/checkbox/checkbox.js'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name][contenthash].js',
        clean: true,
        assetModuleFilename: '[name][ext]',
    },
    devtool: 'source-map',
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist'),
        },
        port: 8080,
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true,
    },
    module: {
        rules: [
        {
            test: /\.s[ac]ss$/i,
            use: [
                { loader: 'style-loader' },
                { loader: 'css-loader' },
                // {
                //     loader: 'postcss-loader',
                //     options: {
                //         postcssOptions: {
                //             plugins: [
                //                 autoprefixer()
                //             ]
                //         }
                //     }
                // },
                {
                    loader:'sass-loader',
                    options: {
                        // See https://github.com/webpack-contrib/sass-loader/issues/804
                        webpackImporter: false,

                        sassOptions: {
                            includePaths: ['./node_modules'],
                        },
                        // Prefer Dart Sass
                        implementation: require('sass'),
                    },
                },
            ],
        },
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env'],
                },
            },
        },
        {
            test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
            type: 'asset/resource'
        }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Main Page',
            filename: 'index.html',
            template: 'src/index.html',
            chunks: ['topAppBar', 'nav', 'index'],
        }),
        new HtmlWebpackPlugin({
            title: 'Form Demo Page',
            filename: 'formDemo.html',
            template: 'src/documentation/formdemo/formDemo.html',
            chunks: ['topAppBar', 'nav', 'formdemo'],
        }),
        new HtmlWebpackPlugin({
            title: 'Project Issues',
            filename: 'projectIssues.html',
            template: 'src/documentation/projectissues/projectIssues.html',
            chunks: ['topAppBar', 'nav', 'projectissues'],
        }),
        new HtmlWebpackPlugin({
            title: 'Project Test Cases',
            filename: 'projectTestCases.html',
            template: 'src/documentation/projecttestcases/projectTestCases.html',
            chunks: ['topAppBar', 'nav', 'projecttestcases'],
        }),

        new HtmlWebpackPlugin({
            title: 'Buttons Page',
            filename: 'buttons.html',
            template: 'src/documentation/buttons/buttons.html',
            chunks: ['topAppBar', 'nav', 'buttons'],
        }),
        new HtmlWebpackPlugin({
            title: 'Checkbox Page',
            filename: 'checkbox.html',
            template: 'src/documentation/checkbox/checkbox.html',
            chunks: ['topAppBar', 'nav', 'checkbox'],
        }),
        new HtmlWebpackPartialsPlugin({
            path: path.join(__dirname, './src/component/nav.html'),
            location: 'navigation',
            template_filename: '*',
            // template_filename: [
            //     'index.html',
            //     'buttons.html',
            // ]
        }),
        new HtmlWebpackPartialsPlugin({
            path: path.join(__dirname, './src/component/topAppBar.html'),
            location: 'topappbar',
            template_filename: '*',
            // template_filename: [
            //     'index.html',
            //     'buttons.html',
            // ]
        }),
        //new BundleAnalyzerPlugin(),
    ]
}
