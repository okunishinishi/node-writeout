/**
 * Detect a file is directory or not.
 * False if file not exists.
 * @memberof module:writeout/lib/filesystem
 * @function isDir
 * @param {string} filename - File name to detect.
 * @param {function} callback - Callback when done.
 */

"use strict";

var fs = require('fs');

/** @lends isDir */
function isDir(filename, callback) {
    fs.exists(filename, function (exists) {
        if (!exists) {
            callback(false);
            return;
        }
        fs.stat(filename, function (err, stats) {
            //Ignore error.
            var isDir = !err && (stats.isDirectory());
            callback(isDir);
        });
    });
}

module.exports = isDir;
