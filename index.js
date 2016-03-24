module.exports = leftpad;

function leftpad (str, len, ch) {
  str = String(str);
  len = len - str.length;
  if (len < 1) return str;
  if (!ch && ch !== 0) ch = ' ';

  var arr = new Array(len+1);
  arr[arr.length - 1] = str;
  return arr.join(ch);
}
