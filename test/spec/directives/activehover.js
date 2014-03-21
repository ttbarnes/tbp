'use strict';

describe('Directive: activeHover', function () {

  //load the directive's module
  beforeEach(module('tbpApp'));

  var element;
  var scope;

  beforeEach(inject(function ($compile, $rootScope) {
    scope = $rootScope;
    element = angular.element('<ul><li active-hover></li><li active-hover></li><li active-hover></li><li active-hover></li></ul>');
    $compile(element)($rootScope);
  }));
  
  it('should have 4 items', function() {
    scope.$digest();
    expect(element.children('li').length).toEqual(4);
  });

  describe('classes should be changed on mouse events', function(){
    it('should add active classes on mouseover', function() {
      scope.$digest();
      var item = element.children('li:eq(0)');
      item.triggerHandler('mouseover');

      expect(element.children('li').hasClass('active')).toBe(true);
      expect(element.children('li').hasClass('inactive')).toBe(true);
    });
    it('should add active classes on mouseover', function() {
      var item = element.children('li:eq(0)');
      item.triggerHandler('mouseout');

      expect(element.children('li').hasClass('active')).toBe(false);
      expect(element.children('li').hasClass('inactive')).toBe(false);
    });
  });
  
});
