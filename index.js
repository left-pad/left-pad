'use strict';
module.exports = leftPad;

function leftPad (str, len, ch) {
  // convert `str` to `string`
  str = str + '';

  // doesn't need to pad
  len = len - str.length;
  if (len <= 0) return str;

  ch = typeof ch === "undefined"?" ":ch+"";
  var pad = '';

  while (true) {
    if (len & 1) pad += ch;
    len >>= 1;
    if (len) {
    	ch += ch;
    } else {
    	return pad + str;
    }
  }
}



