'use strict';


var leftpadOriginal = require('./original');
var leftpadEs6Repeat = require('./es6Repeat');
var leftpadBitOps = require('../');

var Benchmark = require('benchmark');

var str = "abcd"
var len = 100;

function buildSuite (note, methods, parameters) {
  console.log(note);
  var newSuite = new Benchmark.Suite;

  Object.keys(methods).forEach(function (name) {
    newSuite.add(name, function () {
      methods[name].apply(null, parameters);
    });
  });
  newSuite.on('cycle', function (event) {
    console.log(String(event.target));
  }).on('complete', function () {
    console.log('Fastest is ' + this.filter('fastest').map('name'));
  });

  return newSuite;
}

var methods = {
  'Long - Original': leftpadOriginal,
  'Long - ES6 Repeat': leftpadEs6Repeat,
  'Long - Bit Operation': leftpadBitOps
};

buildSuite('-> len = 100', methods, ['abcd', 100, ' ']).run();
buildSuite('-> len = 10', methods, ['abcd', 10,  ' ']).run();
