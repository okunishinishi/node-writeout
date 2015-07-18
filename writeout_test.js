/**
 * Test for writeout.js
 * Runs with nodeunit.
 */

"use strict";

var writeout = require('./writeout'),
    path = require('path'),
    fs = require('fs');

var tmpDir = path.resolve(__dirname, 'tmp'),
    mockContext = {
        logger: {
            debug: function () {

            }
        }
    };


exports.setUp = function (done) {
    if (!fs.existsSync(tmpDir)) {
        fs.mkdirSync(tmpDir);
    }
    done();
};


exports['Do writeout.'] = function (test) {
    var filename = path.resolve(tmpDir, 'foo/bar/baz.txt');
    writeout(filename, 'Oh!', {
        mkdirp: true,
        skipIfIdentical: false
    }, function (err) {
        test.ifError(err);
        writeout(filename, 'Oh!', {
            mkdirp: false,
            skipIfIdentical: true
        }, function (err, result) {
            test.ifError(err);
            test.equal(result.skipped, true);
            test.done();
        });
    });
};

