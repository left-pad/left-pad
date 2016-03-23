'use strict';

module.exports = leftpad;

function leftpad (str, len, ch) {
  ch = ('undefined' === typeof(ch) ? ' ' : String(ch)).charAt(0);
  str = String(str);
  len -= str.length;

  var pad = '';

  while(len > 0) {
    if (len & 1)
      pad += ch;

    if (len >>= 1)
      ch += ch;
  }

  return pad + str;
}
