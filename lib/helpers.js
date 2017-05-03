/**
 * @module helpers
 * @returns {Promise}
 */

'use strict'

const fs = require('fs')
const co = require('co')

const isStream = (content) => typeof content !== 'string' && !!content.pipe

function hasDuplicate (filename, content) {
  return co(function * () {
    if (isStream(content)) {
      return false
    }
    let exists = yield new Promise((resolve) =>
      fs.exists(filename, (exists) => resolve(exists))
    )
    if (!exists) {
      return false
    }
    let existing = yield new Promise((resolve, reject) =>
      fs.readFile(filename, (err, content) =>
        err ? reject(err) : resolve(content)
      )
    )
    return String(existing) === String(content)
  })
}

module.exports = { hasDuplicate, isStream }
