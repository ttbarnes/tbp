'use strict';

describe('Service: Eywa', function () {

  // load the service's module
  beforeEach(module('tbpApp'));

  // instantiate service
  var Eywa;
  beforeEach(inject(function (_Eywa_) {
    Eywa = _Eywa_;
  }));

  it('should do something', function () {
    expect(!!Eywa).toBe(true);
  });

});
