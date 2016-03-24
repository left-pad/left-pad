module.exports = leftpad;

function leftpad (str, len, ch) {
  str = String(str);
  if (!ch && ch !== 0) ch = ' ';
  
  len = len - str.length;
  if (len < 1) return str;
  
  var arr = new Array(len+1);
  for(var i=0; i<arr.length; i++)
    arr[i] = (i == arr.length - 1) ? str : ch;
    
  return arr.join('');
}
