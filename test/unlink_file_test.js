/**
 * Test case for unlinkFile.
 * Runs with nodeunit.
 */

var unlinkFile = require('../lib/filesystem/unlink_file.js'),
    path = require('path'),
    fs = require('fs'),
    mkdirp = require('mkdirp');

var tmpDir = path.resolve(__dirname, '../tmp');

exports.setUp = function (done) {
    mkdirp.sync(tmpDir);
    done();
};

exports.tearDown = function (done) {
    done();
};

exports['Unlink a file.'] = function (test) {
    var filename = path.resolve(tmpDir, 'work_file_to_unlink.txt');
    fs.writeFileSync(filename, 'foo');
    unlinkFile(filename, {
        force: true
    }, function (err) {
        test.ifError(err);
        unlinkFile(filename, function (err) {
            test.ifError(err);
            test.done();
        });
    });
};

exports['Try to delete dir.'] = function (test) {
    var dirname = path.resolve(tmpDir, 'work_dir_to_unlink');
    mkdirp(dirname);
    unlinkFile(dirname, function (err) {
        test.ok(!!err, 'Failed to unlink dir.');
        test.done();
    });
};