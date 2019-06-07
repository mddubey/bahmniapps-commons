var path = require('path');

module.exports = {
    entry: './src/init.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bahmni-patient-commons.js',
        library: 'bahmniPatientCommons',
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
                    // { loader: 'ngtemplate-loader?relativeTo=' + (path.resolve(__dirname, './src')) }
                    {loader: 'html-loader'}
                ]
            }
        ]
    }
};