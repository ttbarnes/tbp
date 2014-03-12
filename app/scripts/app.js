'use strict';

var tbp = angular.module('tbpApp', [
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ngAnimate',
  'tbpControllers'
]);

tbp.config(function ($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'views/intro.html',
			controller: 'introCtrl'
		})
		.when('/showcase', {
			templateUrl: 'views/showcase.html',
			controller: 'showcaseGridCtrl'
		})
		.when('/showcase/jquery/active-hover-states', {
			templateUrl: 'views/demos/ahs.html',
		})
		.when('/showcase/jquery/list-icon-manipulator', {
			templateUrl: 'views/demos/lim.html',
		})
		.when('/showcase/:projectId', {
			templateUrl: 'views/showcase-individual.html',
			controller: 'indShowcasePieceCtrl'
		})
		.when('/about', {
			templateUrl: 'views/about.html',
			controller: 'aboutCtrl'
		})
		.when('/contact', {
			templateUrl: 'views/contact.html',
			controller: 'contactCtrl'
		})
		.otherwise({
			redirectTo: '/error',
			templateUrl: 'views/error.html',
			controller: 'errorCtrl'
		});
})
.run(function($rootScope, windowScrollTop) {
  $rootScope.$on('$routeChangeSuccess', function () {
    windowScrollTop($rootScope);
  });
})
.factory('windowScrollTop', function(){
	return function() {
		window.scrollTo(0,0);
		//would be good to have an optional transiiton fade (for the on click)
	};
});













