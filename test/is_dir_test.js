/**
 * Test case for isDir.
 * Runs with nodeunit.
 */

var isDir = require('../lib/filesystem/is_dir.js');

exports.setUp = function(done) {
    done();
};

exports.tearDown = function(done) {
    done();
};

exports['Is dir'] = function(test){
    isDir(__dirname, function (result) {
        test.equal(result, true);
        isDir('__not_existing', function (result2) {
            test.equal(result2, false);
            test.done();
        });
    });
};

