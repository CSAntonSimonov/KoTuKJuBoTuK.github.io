"use strict"

module.exports = {
    entry: './js/game',
    output: {
        path: __dirname + '/dist',
        filename: "bundle.js"
    },
    watch: true,
    watchOptions: {
        aggregateTimeout: 100,
    },
    devtool: "source-map",
};
