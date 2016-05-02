'use strict'

const writeout = require('writeout')

// Generate a file.
writeout('hello-wold', 'This is the contents text', {
  mkdirp: true,
  skipIfIdentical: true
}).then((result) => {
  if (err) {
    console.error(err);
  } else {
    if (!result.skipped) {
      console.log('File generated:', result.filename);
    }
  }
})
