module.exports = leftpad;

function leftpad (str, len, ch) {
  var i = -1;

  ch || (ch = ' ');
  len = len - str.length;

  while (++i < len) {
    str = ch + str;
  }

  return str;
}
