module.exports = leftpad;

function leftpad(str, len, ch){
  str = '' + str;
  if(!ch && ch !== 0) ch = ' ';
  
  var padlen = len - str.length;
  if(padlen <= 0) return str;
  
  var padch = padlen & 1 ? ch : '';
  
  while(padlen >>= 1) {
    ch += ch;
    if(padlen & 1) {
      padch += ch;
    }
  }
  return padch + str;
}
