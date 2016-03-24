var leftpad = require("./");
var test = require("tape");

test('left pad', function (assert) {
  assert.plan(6);
  assert.strictEqual(leftpad('foo', 5), '  foo');
  assert.strictEqual(leftpad('foobar', 6), 'foobar');
  assert.strictEqual(leftpad(1, 2, 0), '01');
  assert.strictEqual(leftpad(1, 2, '-'), '-1');
  assert.strictEqual(leftpad('foo', 2, ' '), 'foo');
  assert.strictEqual(leftpad('foo', -1, ' '), 'foo');
});
