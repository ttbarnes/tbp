'use strict';

describe('Service: windowScrollTop', function () {

  // load the service's module
  beforeEach(module('tbpApp'));

  // instantiate service
  var windowScrollTop;
  beforeEach(inject(function (_windowScrollTop_) {
    windowScrollTop = windowScrollTop;
  }));

  it('should do something', function () {
    expect(!!windowScrollTop).toBe(true);
  });

});
