var writeout = require('writeout');

// Generate a file.
writeout('hello-wold', 'This is the contents text', {
    mkdirp: true,
    skipIfIdentical: true
}, function (err, result) {
    if (err) {
        console.error(err);
    } else {
        if (!result.skipped) {
            console.log('File generated:', result.filename);
        }
    }
});