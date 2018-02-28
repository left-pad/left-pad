/* This program is free software. It comes without any warranty, to
     * the extent permitted by applicable law. You can redistribute it
     * and/or modify it under the terms of the Do What The Fuck You Want
     * To Public License, Version 2, as published by Sam Hocevar. See
     * http://www.wtfpl.net/ for more details. */
'use strict';
module.exports = leftPad;

// Generate cache. Strings are UTF16 in JavaScript,
// so this will be (1 + 2 + … + 32) = 528*2 bytes,
// or about 1KiB of cache per array (plus a little
// bit extra overhead). 
// Probably not a significant amount.
var cache = ['',' '];
for (var i = 2; i <= 32; i++){
  cache.push(cache[i-1]+' ');
}

function leftPad (str, len, ch) {
  // initialise `pad` as string early - more monomorphic and helps with str coercion
  var pad = '';
  // convert `str` to a `string` via type coercion
  str = str + pad;
  // `len` is the `pad`'s length now
  len = len - str.length;
  // doesn't need to pad
  if (len <= 0) return str;
  // `ch` defaults to `' '` otherwise
  // convert `ch` to a `string` since 
  // it could be a number
  if (!ch && ch !== 0) ch = ' ';
  else ch = ch + pad; 
  // common use cases
  if (ch === ' ') {
    // if less or equal to 32 we have a ready-made padding
    if (len <= 32) return cache[len] + str;
    // initialise pad at correct size and
    // skip the first five iterations
    // of the loop below
    pad = cache[len & 31];
    len >>= 5;
    ch = cache[32];
  }
  while (true) {
    // add `ch` to `pad` if `len` is odd
    if (len & 1) pad = ch + pad;
    // divide `len` by 2, ditch the remainder
    if (len >>= 1) {
      // "double" the `ch` so this operation count grows logarithmically on `len`
      // each time `ch` is "doubled", the `len` would need to be "doubled" too
      // similar to finding a value in binary search tree, hence O(log(n))
      ch += ch;
      // only reached is `len` is not zero, so we can restart loop early
      continue;
    }
    // only reached if `len` is zero, after which we exit the loop
    break;
  }
  // pad `str`!
  return pad + str;
}
