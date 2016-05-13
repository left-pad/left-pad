var leftPad = require("./");
var test = require("tape");

test('left pad', function (assert) {
  assert.plan(13);
  assert.strictEqual(leftPad('foo'      ,  5)           , '  foo'   );
  assert.strictEqual(leftPad('foobar'   ,  6)           , 'foobar'  );
  assert.strictEqual(leftPad(1          ,  7,   0)      , '0000001' );
  assert.strictEqual(leftPad(1          ,  2, '-')      , '-1'      );
  assert.strictEqual(leftPad('foo'      ,  2, ' ')      , 'foo'     );
  assert.strictEqual(leftPad('foo'      , -1, ' ')      , 'foo'     );
  assert.strictEqual(leftPad('foo'      ,  7,   1)      , '1111foo' );
  
  
  assert.strictEqual(leftPad('far'      ,  18)          , '               far' );
  assert.strictEqual(leftPad('far'      ,  19)          , '                far' );
  assert.strictEqual(leftPad('far'      ,  20)          , '                 far' );
  assert.strictEqual(leftPad('far'      ,  21)          , '                  far' );
  
  // this is still unchecked and either case, would be a buggy feature .. 
  assert.strictEqual(leftPad('feature'  ,  8, 'bug or '), 'bug or feature' ); 
  assert.strictEqual(leftPad('feature'  , 10, 'buggy ') , 'buggy buggy buggy feature' ); 
});
