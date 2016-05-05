var assert = require('chai').assert;
require('../bower_components/jquery/dist/jquery.js')
var subject = require('../src/js/pineapple.js')
var pineappleCount = require('../src/js/pineapple.js').pineappleCount

describe('pineapple', function() {
  // it('should show pineapple modal when the pineapple button is clicked', function () {
  //   $('.pineapple-launcher').click();
  //   assert.equal($('.pineapple-content').is(":visible"), true);
  //   assert.equal($('.pineapple-background').is(":visible"), true);
  // });
  it('should show pineapple count', function () {
    assert.equal(pineappleCount(), 42);
  });
});
