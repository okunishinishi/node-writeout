/**
 * Test for writeout.js
 * Runs with mocha.
 */

'use strict'

const writeout = require('../lib')
const fs = require('fs')

const path = require('path')
const assert = require('assert')
const mkdirp = require('mkdirp')

let tmpDir = path.resolve(__dirname, '../tmp')

describe('writeout', () => {
  before(() => {
    mkdirp.sync(tmpDir)
  })

  it('Do writeout.', async () =>  {
    let filename = path.resolve(tmpDir, 'foo/bar/baz.txt')
    let result = await writeout(filename, 'Oh!', {
      mkdirp: true,
      skipIfIdentical: false
    })
    assert.ok(result)
    let result2 = await writeout(filename, 'Oh!', {
      mkdirp: false,
      skipIfIdentical: true
    })
    assert.equal(result2.skipped, true)
  })

  it('Do writeout to force.', async () =>  {
    let filename = path.resolve(tmpDir, 'foo/bar/baz-readonly.txt')
    await writeout(filename, 'This is readonly.', {
      mkdirp: true,
      skipIfIdentical: false,
      mode: '444'
    })
    await writeout(filename, 'Override readonly file.', {
      mkdirp: false,
      skipIfIdentical: true,
      mode: '644',
      force: true
    })
  })

  it('Write from stream', async () =>  {
    let filename = path.resolve(tmpDir, 'foo/bar/baz-stream.txt')
    await writeout(filename, fs.createReadStream(__filename), {
      mkdirp: true,
      skipIfIdentical: false,
      force: true,
      mode: '444'
    })
  })
})

/* global describe, before, it */
