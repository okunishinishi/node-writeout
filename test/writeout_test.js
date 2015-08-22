/**
 * Test for writeout.js
 * Runs with nodeunit.
 */

"use strict";

var writeout = require('../lib'),
    path = require('path'),
    mkdirp = require('mkdirp');

var tmpDir = path.resolve(__dirname, '../tmp');

exports.setUp = function (done) {
    mkdirp.sync(tmpDir);
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


exports['Do writeout to force.'] = function (test) {
    var filename = path.resolve(tmpDir, 'foo/bar/baz-readonly.txt');
    writeout(filename, 'This is readonly.', {
        mkdirp: true,
        skipIfIdentical: false,
        mode: '444'
    }, function (err) {
        test.ifError(err);
        writeout(filename, 'Override readonly file.', {
            mkdirp: false,
            skipIfIdentical: true,
            mode: '644',
            force: true
        }, function (err, result) {
            test.ifError(err);
            test.done();
        });
    });
};

