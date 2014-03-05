'use strict';

describe('Controller: introCtrl', function () {

  // load the controller's module
  beforeEach(module('tbpApp'));

  var introCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    introCtrl = $controller('introCtrl', {
      $scope: scope
    });
  }));

  //it('should attach a list of awesomeThings to the scope', function () {
  //  expect(scope.awesomeThings.length).toBe(3);
  //});

  it('should have a page class/name', function (){
    expect(scope.pageClass).not.toBeUndefined();
    //toBeDefined
  });
  //describe("Recent releases data", function() {
    /*it('should have X Y and Z', function(){
      expect(scope.projects.id).toBeDefined();
    });
    */
  //});

  
  

});
