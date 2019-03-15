'use strict';

module.exports = function (str, len, ch) {
  str = str + '';
  if (len <= str.length) return str;
  if (!ch && ch !== 0) ch = ' ';
  return str.padStart(len, ch);
};
