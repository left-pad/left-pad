## left-pad

String left pad

We are now using O(log(n)) algorithm.

[![Build Status][travis-image]][travis-url]

## Install

```bash
$ npm install left-pad
```

## Usage

```js
leftPad = require('left-pad')

leftPad('foo', 5)
// => "  foo"

leftPad('foobar', 6)
// => "foobar"

leftPad(1, 2, 0)
// => "01"

leftPad(17, 5, 0)
// => "00017"
```

[travis-image]: https://travis-ci.org/stevemao/left-pad.svg?branch=master
[travis-url]: https://travis-ci.org/stevemao/left-pad
