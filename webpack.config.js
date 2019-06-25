var path = require('path');

module.exports = {
    entry: {
        "bahmni-patient-commons": path.join(__dirname, 'bahmni-patient-commons/init.js'),
        "displaycontrols": path.join(__dirname, 'displaycontrols/init.js'),
        "authentication": path.join(__dirname, 'authentication/init.js'),
        "ui-helper": path.join(__dirname, 'ui-helper/init.js'),
        "bahmni-util-commons": path.join(__dirname, 'bahmni-util-commons/init.js'),
        "bahmni-config-commons": path.join(__dirname, 'bahmni-config-commons/init.js'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        libraryTarget: 'umd',
    },
    module: {
        rules: [
            {
                // https://github.com/webpack/webpack/issues/512#issuecomment-288143187
                // test: /[\\\/]lib[\\\/]modernizr*\.js$/,
                test: /modernizr.custom/,
                use: [
                    { loader: 'imports-loader?this=>window'}
                ]
            },
            {
                test: /\.js$/,
                use: [
                    { loader: 'babel-loader' }
                ]
            },
            {
                test: /\.html$/,
                use: [
                    { loader: 'html-loader' }
                ]
            }
        ]
    }
};