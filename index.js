module.exports = leftpad;

function leftpad (str, len, ch) {
  str = String(str);

  if (!ch && ch !== 0) ch = ' ';

  len = len - str.length;
  if (len <=0) return str;

  ch = ch + '';
  pad_str = '';
  while (true) {
    if (len & 1) pad_str += ch;
    len >>= 1
    if (len) ch += ch;
    else break;
  }
  return pad_str + str;
}
