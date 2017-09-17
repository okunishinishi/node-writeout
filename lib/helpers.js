/**
 * @module helpers
 * @returns {Promise}
 */

'use strict'

const fs = require('fs')

const isStream = (content) => typeof content !== 'string' && !!content.pipe

async function hasDuplicate (filename, content) {
  if (isStream(content)) {
    return false
  }
  const exists = await new Promise((resolve) =>
    fs.exists(filename, (exists) => resolve(exists))
  )
  if (!exists) {
    return false
  }
  const existing = await new Promise((resolve, reject) =>
    fs.readFile(filename, (err, content) =>
      err ? reject(err) : resolve(content)
    )
  )
  return String(existing) === String(content)
}

module.exports = {hasDuplicate, isStream}
