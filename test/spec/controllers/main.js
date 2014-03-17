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

  it('should have a page class/name', function (){
    expect(scope.pageClass).toBeDefined();
  });

  it('should have a scrollTop function defined', function(){
    expect(scope.scrollTop).toBeDefined();
  });

});

describe('Controller: showcaseGridCtrl', function () {

  // load the controller's module
  beforeEach(module('tbpApp'));

  var showcaseGridCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    showcaseGridCtrl = $controller('showcaseGridCtrl', {
      $scope: scope
    });
  }));

  it('should have a page class/name', function (){
    expect(scope.pageClass).toBeDefined();
  });
  
  describe('Showcase grid category filter', function() {

    it('should have the selectedCategory variable assigned to the value', function(){
      expect(scope.setSelectedCategory.value === scope.selectedCategory);
    });

    it('should have categories defined', function(){
      expect(scope.categories).toEqual([
        'Ecommerce',
        'Static',
        'jQuery plugins',
        'Holding pages',
        'Brand identity',
        'Designs, mockups'
      ]);
    });

    it('should have a selected, default category', function(){
      expect(scope.selectedCategory).toBe('Ecommerce');
    });

  });
  
  it('should have a scrollTop function defined', function(){
    expect(scope.scrollTop).toBeDefined();
  });

  
});

describe('Controller: indShowcasePieceCtrl', function () {

  // load the controller's module
  beforeEach(module('tbpApp'));

  var indShowcasePieceCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    indShowcasePieceCtrl = $controller('indShowcasePieceCtrl', {
      $scope: scope
    });
  }));

  it('should have a page class/name', function (){
    expect(scope.pageClass).toBeDefined();
  });

  it('should have a scrollTop function defined', function(){
    expect(scope.scrollTop).toBeDefined();
  });

});

describe('Controller: aboutCtrl', function () {

  // load the controller's module
  beforeEach(module('tbpApp'));

  var aboutCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    aboutCtrl = $controller('aboutCtrl', {
      $scope: scope
    });
  }));

  it('should have a page class/name', function (){
    expect(scope.pageClass).toBeDefined();
  });

  it('should have a scrollTop function defined', function(){
    expect(scope.scrollTop).toBeDefined();
  });

});

describe('Controller: contactCtrl', function () {

  // load the controller's module
  beforeEach(module('tbpApp'));

  var contactCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    contactCtrl = $controller('contactCtrl', {
      $scope: scope
    });
  }));

  it('should have a page class/name', function (){
    expect(scope.pageClass).toBeDefined();
  });

  it('should have an contact email address defined', function(){
    expect(scope.tonyDetails.email).toBe('tony@tonybarnes.me');
  });

});


describe('Controller: errorCtrl', function () {

  // load the controller's module
  beforeEach(module('tbpApp'));

  var errorCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    errorCtrl = $controller('errorCtrl', {
      $scope: scope
    });
  }));

  it('should have a page class/name', function (){
    expect(scope.pageClass).toBeDefined();
  });

});