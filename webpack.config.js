var path = require('path');

module.exports = {
    entry: {
        "bahmni-patient-commons": path.join(__dirname, 'bahmni-patient-commons/init.js'),
        "displaycontrols": path.join(__dirname, 'displaycontrols/init.js'),
        "authentication": path.join(__dirname, 'authentication/init.js'),
        "ui-helper": path.join(__dirname, 'ui-helper/init.js'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        libraryTarget: 'umd',
    },
    module: {
        rules: [
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