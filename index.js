/* This program is free software. It comes without any warranty, to
 * the extent permitted by applicable law. You can redistribute it
 * and/or modify it under the terms of the Do What The Fuck You Want
 * To Public License, Version 2, as published by Sam Hocevar. See
 * http://www.wtfpl.net/ for more details. */
'use strict';
module.exports = leftPad;

// Generate cache for common use-case of padding with spaces and zeros.
// JavaScript has UTF16 strings, so worst case this is 2 bytes times
// 1 + 2 + … + 32 = 528 chars, or about 1KiB per array, plus a few
// bytes of overhead per string. Probably not a significant amount.
var c_ = [' '], c0 = ['0'];
for (var i = 1; i < 32; i++) {
  c_.push(c_[i - 1] + ' ');
  c0.push(c0[i - 1] + '0');
}

/**
 * @param {string|number} str value to pad
 * @param {number} len 
 * @param {(string|number)=} ch character to pad with
 * @returns {string}
 */
function leftPad (str, len, ch) {
  // Force `str` to a string via type coercion,
  // subtract `str.length` from `len` to get proper
  // pad length, and return if we don't need to pad
  if (str += '', len -= str.length, len <= 0) return str;
  var pad = '';
  // `ch` defaults to `' '` for falsy values, except for 0
  if (ch === ' ' || !ch && ch !== 0){
    // We use a cache to speed up the default case
    pad = c_[len-1 & 31];
    if (len <= 32) return pad + str;
    // `pad` effectively contains the result of
    // iterating the loop below five times,
    // so we can skip those.
    // `ch` is set to 32 spaces to accomodate this.
    ch = '                                ';
    len >>= 5;
  } else if ((ch+= '') === '0'){
    // padding by zero is another really common use-case
    pad = c0[len-1 & 31];
    if (len <= 32) return pad + str;
    ch = '00000000000000000000000000000000';
    len >>= 5;
  }
  // `len` must be non-zero at this point, and the
  // last loop iteration is guaranteed to be one,
  // meaning we can skip testing for it entirely.
  while (len>1) {
    // We essentially apply bitwise multiplication
    // when adding `ch` to `pad`, which means it grows
    // with O(log2(n)) - excluding overhead of
    // string concatenation.
    // To do so, add `ch` if the last bit is odd, then
    if (len & 1) pad += ch;
    // shift out the last bit of `len` (halving it),
    len >>= 1;
    // and double the size of `ch`.
    ch += ch;
  }
  // Finally, pad `str`!
  // `ch` contains the skipped iteration,
  // `pad` contains the rest of the padding
  return ch + pad + str
}