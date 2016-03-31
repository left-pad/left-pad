module.exports = leftpad;

function leftpad (str, len, ch) {
  str = str +''; 

  len = len - str.length;
  if (len <= 0) return str;

  if (!ch && ch !== 0) ch = ' ';
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
