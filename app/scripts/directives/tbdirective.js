'use strict';

angular.module('tbpApp')
  .directive('tbDirective', function () {
	  //return function (scope, element, attributes) {
	  return function () {
			console.log('tony alerted1!');
			setTimeout(function () {
				//if (scope.$eval(attributes.scrollIf)) {
				  //window.scrollTo(0, element[0].offsetTop - 100)
				  console.log('tony alerted!');
				//}
			  });
	  };
  });