/**
 * Writeout a file.
 * @function writeout
 * @param {string} filename - Filename to write.
 * @param {string} content - String content to write.
 * @param {object} [options] - Optional settings.
 * @param {boolean} [options.mkdirp=false] - Make parent directories.
 * @param {boolean} [options.skipIfIdentical=false] - Skip to write if existing content is identical.
 * @param {string} [options.mode='644'] - File permission.
 * @param {function} [callback] - Callback when done.
 */

"use strict";

var async = require('async'),
    fs = require('fs'),
    path = require('path'),
    argx = require('argx'),
    mkdirp = require('mkdirp');

/** @lends writeout */
function writeout(filename, content, options, callback) {
    var args = argx(arguments);
    filename = args.shift();
    content = args.shift();
    callback = args.pop('function') || argx.noop;
    options = args.pop('object') || {};

    var needsMkdirp = !!options.mkdirp,
        skipIfIdentical = !!options.skipIfIdentical;

    var result = {};
    result.filename = filename;
    async.series([
        function (callback) {
            if (needsMkdirp) {
                mkdirp(path.dirname(filename), callback);
            } else {
                callback(null);
            }
        },
        function (callback) {
            async.waterfall([
                function (callback) {
                    if (skipIfIdentical) {
                        _hasDuplicate(filename, content, function (duplicate) {
                            callback(null, duplicate);
                        });
                    } else {
                        callback(null, false);
                    }
                },
                function (skip, callback) {
                    if (skip) {
                        result.skipped = true;
                        callback(null);
                        return;
                    }
                    fs.writeFile(filename, content, {
                        mode: options.mode || '644'
                    }, function (err) {
                        result.skipped = false;
                        callback(err);
                    });
                }
            ], callback)
        }
    ], function (err) {
        callback(err, result);
    });
}

function _hasDuplicate(filename, content, callback) {
    fs.exists(filename, function (exists) {
        if (!exists) {
            callback(true);
            return;
        }
        fs.readFile(filename, function (err, exsting) {
            var duplicate = !err && (String(exsting) === String(content));
            callback(!!duplicate);
        });
    });
}

module.exports = writeout;

