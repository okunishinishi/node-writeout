writeout
==========

<!-- Badge Start -->
<a name="badges"></a>

[![Build Status][bd_travis_shield_url]][bd_travis_url]
[![Code Climate][bd_codeclimate_shield_url]][bd_codeclimate_url]
[![Code Coverage][bd_codeclimate_coverage_shield_url]][bd_codeclimate_url]
[![npm Version][bd_npm_shield_url]][bd_npm_url]

[bd_repo_url]: https://github.com/okunishinishi/node-writeout
[bd_travis_url]: http://travis-ci.org/okunishinishi/node-writeout
[bd_travis_shield_url]: http://img.shields.io/travis/okunishinishi/node-writeout.svg?style=flat
[bd_license_url]: https://github.com/okunishinishi/node-writeout/blob/master/LICENSE
[bd_codeclimate_url]: http://codeclimate.com/github/okunishinishi/node-writeout
[bd_codeclimate_shield_url]: http://img.shields.io/codeclimate/github/okunishinishi/node-writeout.svg?style=flat
[bd_codeclimate_coverage_shield_url]: http://img.shields.io/codeclimate/coverage/github/okunishinishi/node-writeout.svg?style=flat
[bd_gemnasium_url]: https://gemnasium.com/okunishinishi/node-writeout
[bd_gemnasium_shield_url]: https://gemnasium.com/okunishinishi/node-writeout.svg
[bd_npm_url]: http://www.npmjs.org/package/writeout
[bd_npm_shield_url]: http://img.shields.io/npm/v/writeout.svg?style=flat

<!-- Badge End -->


<!-- Description Start -->
<a name="description"></a>

Write out string files with various options.

<!-- Description End -->



<!-- Sections Start -->
<a name="sections"></a>

Installation
-----

```bash
npm install writeout --save
```

Usage
----

```javascript
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
```
Options
-----

| Name | Default | Description |
| --- | --- | --- |
| `mkdirp` | false | Make parent directories. |
| `skipIfIdentical` | false | Skip to write if existing content is identical. ||
| `mode` | "644" | File permission. |

<!-- Sections Start -->


<!-- LICENSE Start -->
<a name="license"></a>

License
-------
This software is released under the [MIT License](https://github.com/okunishinishi/node-writeout/blob/master/LICENSE).

<!-- LICENSE End -->


