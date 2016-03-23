'use strict';

module.exports = function leftpadEs6Repeat (str, len, ch) {
  var l;

  str = String(str);
  l = len - str.length;

  if (!ch && ch !== 0) {
    ch = ' ';
  }

  if (l > 0) {
    return ch.repeat(l) + str;
  }

  return str;

};
