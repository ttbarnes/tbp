'use strict';

var tbangApp = angular.module('tbpApp', [
  'ngResource',
  'ngSanitize',
  'ngRoute',
	'ngAnimate',
	'angular-inview',
	'tbangControllers'
]);
  
	
tbangApp.config(function ($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'views/intro.html',
			controller: 'introCtrl'
		})
		.when('/showcase', {
			templateUrl: 'views/showcase.html',
			controller: 'showcaseGridCtrl'
		})
		.when('/showcase/:phoneId', {
			templateUrl: 'views/showcase-individual.html',
			controller: 'indShowcasePieceCtrl'
		});
	//.otherwise({
	//	redirectTo: '/'
	//});
});