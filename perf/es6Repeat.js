'use strict';

module.exports = function (str, len, ch = ' ') {
  str = str + '';

  len = len - str.length;
  if (len <= 0) return str;

  ch += '';
  if(ch.length <= 0) ch += ' ';

  return ch.repeat(len) + str;
};
