var leftpad = require("./");
var test = require("tape");

test('left pad', function (assert) {
  assert.plan(2);
  assert.equal(leftpad('foo', 5), '  foo');
  assert.equal(leftpad('foobar', 6), 'foobar');
});
