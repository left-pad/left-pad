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
leftpad = require('left-pad')

leftpad('foo', 5)
// => "  foo"

leftpad('foobar', 6)
// => "foobar"

leftpad(1, 2, 0)
// => "01"
```

[travis-image]: https://travis-ci.org/stevemao/left-pad.svg?branch=master
[travis-url]: https://travis-ci.org/stevemao/left-pad
