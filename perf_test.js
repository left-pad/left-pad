function leftpad_orginal (str, len, ch) {
  str = String(str);

  var i = -1;

  if (!ch && ch !== 0) ch = ' ';

  len = len - str.length;

  while (++i < len) {
    str = ch + str;
  }

  return str;
}



function leftpad_es6_repeat(str, len, ch) {
  str = String(str);
  if (!ch && ch !== 0) ch = ' ';
  var l = len - str.length; 
  if (l > 0) return ch.repeat(l)+str;
  return str;
}



function leftpad_bit_ops(str, len, ch) {
  str = String(str);

  if (!ch && ch !== 0) ch = ' ';

  len = len - str.length;
  if (len <= 0) return str;

  ch = ch + '';
  var pad = '';
  while (true) {
    if (len & 1) pad += ch;
    len >>= 1;
    if (len) ch += ch;
    else break;
  }
  return pad + str;
}


var Benchmark = require('benchmark');

var t_str = "abcd"
var t_len = 100;

var suite01 = new Benchmark.Suite;
suite01.add('Long: Original',        function() {    leftpad_orginal(t_str, t_len, ' ');})
     .add('Long: ES6 Repeat',      function() { leftpad_es6_repeat(t_str, t_len, ' ');})
     .add('Long: Bit Operation',   function() {    leftpad_bit_ops(t_str, t_len, ' ');})
     .on('cycle', function(event) { console.log(String(event.target)); })
     .on('complete', function() { console.log('Fastest is ' + this.filter('fastest').map('name')); })
     .run();

t_len=10;
var suite02 = new Benchmark.Suite;
suite02.add('Normal: Original',      function() {    leftpad_orginal(t_str, t_len, ' ');})
     .add('Normal: ES6 Repeat',    function() { leftpad_es6_repeat(t_str, t_len, ' ');})
     .add('Normal: Bit Operation', function() {    leftpad_bit_ops(t_str, t_len, ' ');})
     .on('cycle', function(event) { console.log(String(event.target)); })
     .on('complete', function() { console.log('Fastest is ' + this.filter('fastest').map('name')); })
     .run();

/*
function test(fn, str, len, times) {
  var expected = " ".repeat(len-str.length) + str;
  len = expected.length;
  console.time(fn.name); 
  for(i=0; i<times; i++) {
    if (expected !== fn(str, len, ' ') ){
      console.log("error");
      break;
    }
  }
  console.timeEnd(fn.name); 
}

for(var round=0; round<5; round++) {
  console.log("====== "+round + " ======");
  var times = 1000000;
  var str = "abcd"
  var len = 100;
  console.log("test(\""+str+"\", " + len + ")" );
  test(leftpad_orginal, str, len, times);
  test(leftpad_es6_repeat, str, len, times);
  test(leftpad_bit_ops, str, len, times);
  console.log("\n");
  
  str = "abcd"
  len = 10;
  console.log("test(\""+str+"\", " + len + ")" );
  test(leftpad_orginal, str, len, times);
  test(leftpad_es6_repeat, str, len, times);
  test(leftpad_bit_ops, str, len, times);
  console.log("\n");
  
  str = "abcd"
  len = 5;
  console.log("test(\""+str+"\", " + len + ")" );
  test(leftpad_orginal, str, len, times);
  test(leftpad_es6_repeat, str, len, times);
  test(leftpad_bit_ops, str, len, times);
  console.log("\n");
}
*/
