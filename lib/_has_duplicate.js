/**
 * @function _hasDuplicate
 * @private
 */

"use strict";

var fs = require('fs');

/** @lends _hasDuplicate */
function _hasDuplicate(filename, content, callback) {
    fs.exists(filename, function (exists) {
        if (!exists) {
            callback(false);
            return;
        }
        fs.readFile(filename, function (err, exsting) {
            var duplicate = !err && (String(exsting) === String(content));
            callback(!!duplicate);
        });
    });
}

module.exports = _hasDuplicate;