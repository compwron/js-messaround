var Pineapple = require('../src/js/pineapple.js')

describe('pineapple', function() {
  // it('should show pineapple modal when the pineapple button is clicked', function () {
  //   $('.pineapple-launcher').click();
  //   assert.equal($('.pineapple-content').is(":visible"), true);
  //   assert.equal($('.pineapple-background').is(":visible"), true);
  // });
  it('should show pineapple count', function () {
    assert.equal(Pineapple.pineappleCount(), 42);
  });
});
