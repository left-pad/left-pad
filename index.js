module.exports = leftpad;

var cache = [
  '',
  ' ',
  '  ',
  '   ',
  '    ',
  '     ',
  '      ',
  '       ',
  '        ',
  '         '
];

function leftpad (str, len, ch) {
  //convert the `str` to String
  str = str +''; 

  //needn't to pad
  len = len - str.length;
  if (len <= 0) return str;

  //convert the `ch` to String
  if (!ch && ch !== 0) ch = ' ';
  ch = ch + ''; 
  if(ch === ' ' && len < 10) return cache[len] + str;
  var pad = '';
  while (true) {
    if (len & 1) pad += ch;
    len >>= 1;
    if (len) ch += ch;
    else break;
  }
  return pad + str;
}
