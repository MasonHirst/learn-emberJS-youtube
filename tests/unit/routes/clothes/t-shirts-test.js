import { module, test } from 'qunit';
import { setupTest } from 'ember-tutorial/tests/helpers';

module('Unit | Route | clothes/t-shirts', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:clothes/t-shirts');
    assert.ok(route);
  });
});
