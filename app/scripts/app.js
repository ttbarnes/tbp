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
.run(function($rootScope, autoWindowScrollTop) {
  $rootScope.$on('$routeChangeSuccess', function () {
    autoWindowScrollTop($rootScope);
  });
})
.factory('autoWindowScrollTop', function(){
  return function() {
    window.scrollTo(0,0); //failsafe
	};
});




tbp.factory('myService', function() {
	return {
		foo: function() {
			//var smoothScroll = true;
			console.log('I am foo!');
			//smoothScroll.init();
			//smoothScroll.animateScroll( null, '#bazinga' );
			/*smoothScroll.init({
		    speed: 500, // How fast to complete the scroll in milliseconds
		    easing: 'easeInOutCubic', // Easing pattern to use
		    updateURL: false // Boolean. Whether or not to update the URL with the anchor hash on scroll
		    //callbackBefore: function ( toggle, anchor ) {}, // Function to run before scrolling
		    //callbackAfter: function ( toggle, anchor ) {} // Function to run after scrolling
			});
*/
    }
	};
});
















