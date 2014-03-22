
'use strict';

describe('Directive: scrollTo', function () {

  // load the directive's module
  beforeEach(module('tbpApp'));

  var element,
    scope;

  beforeEach(inject(function ($compile, $rootScope) {
    //scope = $rootScope.$new();
    scope = $rootScope;
    element = angular.element('<ul><li><a scroll-to="sectionIntro">About</a></li><li><a scroll-to="sectionInstallation">Install</a></li><li><a scroll-to="sectionOptions">Options</a></li></ul>');
    $compile(element)($rootScope);
  }));

  it('should not reload a page and scroll to the anchor link', inject(function () {
    //this doesn't seem possible to *fully* unit test. Investigate.
    //currently, this is only used on the jquery demo pages
  }));
});