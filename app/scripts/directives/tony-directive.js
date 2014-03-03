'use strict';
//angular.module('tbpApp')
//  .directive('tbDirective', function () {

var tonyAppModule = angular.module('tonyAppModule', []);

//
//
//this should be in a directive. Directive's are for dom manipulation stuff.
//
//

tonyAppModule.service('tonyDirective', function() {
	return {
		someFunctionStuff:function($scope, $window) {
			console.log('TB trying to scroll');
	    angular.element($window).scroll(0, 0);
			console.log('scrolled');
		}
	};
});
