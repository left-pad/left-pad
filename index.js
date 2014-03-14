module.exports = leftpad;

function leftpad (str, len) {
  var i = -1;
  len = len - str.length;

  while (++i < len) {
    str = ' ' + str;
  }

  return str;
}
