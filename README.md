## left-pad

String left pad.

<a href="https://travis-ci.org/camwest/left-pad"><img alt="Travis Status" src="https://travis-ci.org/camwest/left-pad.svg?branch=master&label=travis&style=flat"></a>

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
