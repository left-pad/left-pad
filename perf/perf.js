'use strict';
var oN = require('./O(n)');
var es6Repeat = require('./es6Repeat');
var current = require('../');

var Benchmark = require('benchmark');

var str = "abcd"
var len = 100;

function buildSuite (note, fns, args) {
  console.log(note);
  var suite = new Benchmark.Suite;

  Object.keys(fns).forEach(function (name) {
    suite.add(name, function () {
      fns[name].apply(null, args);
    });
  });
  suite.on('cycle', function (event) {
    console.log(String(event.target));
  }).on('complete', function () {
    console.log('Fastest is ' + this.filter('fastest').map('name'));
  });

  return suite;
}

var fns = {
  'O(n)': oN,
  'ES6 Repeat': es6Repeat,
  'Current': current
};

buildSuite('-> len = 100', fns, ['abcd', 100, ' ']).run();
buildSuite('-> len = 10', fns, ['abcd', 10,  ' ']).run();
