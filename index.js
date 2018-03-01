/* This program is free software. It comes without any warranty, to
 * the extent permitted by applicable law. You can redistribute it
 * and/or modify it under the terms of the Do What The Fuck You Want
 * To Public License, Version 2, as published by Sam Hocevar. See
 * http://www.wtfpl.net/ for more details. */
'use strict';
module.exports = leftPad;

// Generate cache. Strings are UTF16 in JavaScript, so
// this will be at most (1 + 2 + … + 32) = 528*2 bytes,
// or about 1KiB of cache per array (plus a little
// bit extra overhead). Probably not a significant amount.
var c = [' '];
for (var i = 1; i < 32; i++) {
  c.push(c[i - 1] + ' ');
}

/**
 * @param {string|number} str value to pad
 * @param {number} len 
 * @param {(string|number)=} ch character to pad with
 * @returns {string}
 */
function leftPad (str, len, ch) {
  // force `str` to a `string` via type coercion,
  // subtract its length from `len` to get proper
  // pad length, and return if we don't need to pad
  if (str += '', len -= str.length, len <= 0) return str;
  // `ch` defaults to `' '`, otherwise coerce it
  // to a `string` since it could be a number
  if (!ch && ch !== 0) ch = ' ';
  else ch += ''; 
  // common use cases
  var pad = '';
  if (ch === ' ') {
    pad = c[len-1 & 31];
    if (len <= 32) return pad + str;
    // `pad` already contains the result of
    // iterating the loop below five times,
    // so we can skip those.
    // `ch` is to 32 spaces to accomodate this.
    ch = '                                ';
    len >>= 5;
  }
  // `len` must be non-zero at this point,
  // and the last iteration through the loop
  // is guaranteed to be one, meaning we can skip
  // that last iteration of the while loop entirely.
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