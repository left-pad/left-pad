'use strict';

module.exports  = leftPad;

leftPad.spaces  = [ // avoid global pollution & power of 2 size
    ''
  , ' '                 //1
  , '  '                //2
  , '   '           
  , '    '              //4
  , '     '         
  , '      '
  , '       '
  , '        '          //8
  , '         '
  , '          '
  , '           '
  , '            '
  , '             '
  , '              '
  , '               '
  , '                '  //16
];

leftPad.zeros   = [ // that's another most used case, worth to cache it
    ''
  , '0'                 //1
  , '00'                //2
  , '000'           
  , '0000'              //4
  , '00000'         
  , '000000'
  , '0000000'
  , '00000000'          //8
  , '000000000'
  , '0000000000'
  , '00000000000'
  , '000000000000'
  , '0000000000000'
  , '00000000000000'
  , '000000000000000'
  , '0000000000000000'  //16
];

function leftPad (str, len, ch) {
  var   pad     = ''
  ,     cache   
  ;
  
  str = '' + str; 
   ch = arguments.length<=2 ? ' ' : ''+ch;
  
  len = len - str.length;
  if (len <= 0) return str;
  
  // special cases
        if (ch === ' ') cache = leftPad.spaces;
  else  if (ch === '0') cache = leftPad.zeros;
  
  if (cache){  
   var cLen=cache.length-1;
   if (len <= cLen) return cache[len] + str;
   len-=cLen;
   pad =cache[cLen]
  }   
  
  // still unchecked here the case where ch is a string istead of a char !!
  
  while (true) {
    if (len & 1) pad += ch;
    len >>= 1;
    if (len>0) ch += ch;
    else break;
  }
  return pad + str;
}
