/**
 * Writeout a file.
 * @function writeout
 * @param {string} filename - Filename to write.
 * @param {string|Buffer|ReadableStream} content - String content to write.
 * @param {object} [options] - Optional settings.
 * @param {boolean} [options.mkdirp=false] - Make parent directories.
 * @param {boolean} [options.skipIfIdentical=false] - Skip to write if existing content is identical.
 * @param {string} [options.mode='644'] - File permission.
 * @param {boolean} [options.force=false] - Force to write even if existing file is readonly.
 * @returns {Promise}
 */

'use strict'

const fs = require('fs')
const path = require('path')
const argx = require('argx')
const mkdirp = require('mkdirp')
const filedel = require('filedel')
const {hasDuplicate, isStream} = require('./helpers')

/** @lends writeout */
async function writeout (filename, content, options = {}) {
  if (argx(arguments).pop('function')) {
    throw new Error('[writeout] Callback is no more supported. Use promise interface instead.')
  }

  const {
    mkdirp: needsMkdirp = false,
    skipIfIdentical = false,
    force = false,
    mode = '644'
  } = options

  const result = {filename}

  if (needsMkdirp) {
    await new Promise((resolve, reject) =>
      mkdirp(path.dirname(filename), (err) => err ? reject(err) : resolve())
    )
  }

  if (skipIfIdentical) {
    let skip = await hasDuplicate(filename, content)
    if (skip) {
      result.skipped = true
      return result
    }
  }

  if (force) {
    await filedel(filename, {force: true})
  }

  if (isStream(content)) {
    let write = fs.createWriteStream(filename, {mode})
    await new Promise((resolve, reject) => {
      content.pipe(write)
      write.on('close', () => resolve())
      write.on('error', (err) => reject(err))
    })
  } else {
    await new Promise((resolve, reject) =>
      fs.writeFile(filename, content, {mode}, (err) => err ? reject(err) : resolve())
    )
  }

  result.skipped = false

  // Wait for flush
  await new Promise((resolve) =>
    process.nextTick(() => resolve())
  )

  return result
}

module.exports = writeout
