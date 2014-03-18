'use strict';

describe('Service: windowScrollTop', function () {

  // load the service's module
  beforeEach(module('tbpApp'));

  // instantiate service
  var windowScrollTop;
  beforeEach(inject(function (_windowScrollTop_) {
    windowScrollTop = _windowScrollTop_;
  }));

  it('should have a window.scrollTo', function () {
    expect(!!windowScrollTop).toBeDefined();
    expect(!windowScrollTop.scrollTo).toBe(true);
  });

});
