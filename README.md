writeout
=========

Write out string files with various options. 


<!-- Badge start -->

[![Build Status][my_travis_badge_url]][my_travis_url]
[![Code Climate][my_codeclimate_badge_url]][my_codeclimate_url]
[![Code Coverage][my_codeclimate_coverage_badge_url]][my_codeclimate_url]
[![npm version][my_npm_budge_url]][my_npm_url]

Usage
-----

```javascript
writeout('hello-wold', 'This is the contents text', {
    mkdirp: true,
    skipIfIdentical: true
}, function(err, result){
    if(err){
        console.error(err);
    } else {
        if (!result.skipped){
            console.log('File generated:', result.filename);
        }
    }
});
```


Options
-----

| Name | Description |
| --- | --- |
| `mkdirp` | Make parent directories. |
| `skipIfIdentical` | Skip to write if existing content is identical. ||


Installation
-----

```bash
npm install writeout --save
```


License
-------
This software is released under the [MIT License][my_license_url].



<!-- Links start -->

[nodejs_url]: http://nodejs.org/
[npm_url]: https://www.npmjs.com/
[nvm_url]: https://github.com/creationix/nvm
[bitdeli_url]: https://bitdeli.com/free
[my_bitdeli_badge_url]: https://d2weczhvl823v0.cloudfront.net/okunishinishi/node-writeout/trend.png
[my_repo_url]: https://github.com/okunishinishi/node-writeout
[my_travis_url]: http://travis-ci.org/okunishinishi/node-writeout
[my_travis_badge_url]: http://img.shields.io/travis/okunishinishi/node-writeout.svg?style=flat
[my_license_url]: https://github.com/okunishinishi/node-writeout/blob/master/LICENSE
[my_codeclimate_url]: http://codeclimate.com/github/okunishinishi/node-writeout
[my_codeclimate_badge_url]: http://img.shields.io/codeclimate/github/okunishinishi/node-writeout.svg?style=flat
[my_codeclimate_coverage_badge_url]: http://img.shields.io/codeclimate/coverage/github/okunishinishi/node-writeout.svg?style=flat
[my_apiguide_url]: http://okunishinishi.github.io/node-writeout/apiguide
[my_lib_apiguide_url]: http://okunishinishi.github.io/node-writeout/apiguide/module-writeout_lib.html
[my_coverage_url]: http://okunishinishi.github.io/node-writeout/coverage/lcov-report
[my_coverage_report_url]: http://okunishinishi.github.io/node-writeout/coverage/lcov-report/
[my_gratipay_url]: https://gratipay.com/okunishinishi/
[my_gratipay_budge_url]: http://img.shields.io/gratipay/okunishinishi.svg?style=flat
[my_npm_url]: http://www.npmjs.org/package/writeout
[my_npm_budge_url]: http://img.shields.io/npm/v/writeout.svg?style=flat
[my_tag_url]: http://github.com/okunishinishi/node-writeout/releases/tag/
[my_tag_badge_url]: http://img.shields.io/github/tag/okunishinishi/node-writeout.svg?style=flat
