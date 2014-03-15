'use strict';

describe('Directive: activeHover', function () {

  // load the directive's module
  beforeEach(module('tbpApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<active-hover></active-hover>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the activeHover directive');
  }));
});
