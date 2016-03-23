module.exports = leftpad;

function leftpad (str, len, ch) {
  str = String(str);

  len = len - str.length;
  if (len < 1) return str;

  if (!ch && ch !== 0) ch = ' ';

  var temp = ch;
  var pad = '';
  var bit = 1;
  for (;;) {
    if (len & bit) {
      pad += temp;
    }
    if (bit < len) {
      bit *= 2;
      temp += temp;
    } else {
      return pad + str;
    }
  }
}
