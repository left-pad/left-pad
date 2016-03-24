module.exports = leftpad;

function leftpad (str, len, ch) {
    return ( Array( len+1 ).join( ch ) + String( str ) ).slice( -1 * len );
}
