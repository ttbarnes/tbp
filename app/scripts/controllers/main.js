'use strict';

var tbpControllers = angular.module('tbpControllers', []);

tbpControllers.controller('introCtrl', ['$scope', '$http', 'windowScrollTop',

  function($scope, $http, windowScrollTop) {
		$scope.pageClass = 'introPage';
		
		$http.get('showcase/recent-releases.json').success(function(data) {
      $scope.projects = data;
    });

    $scope.scrollTop = function () {
      windowScrollTop();
    };

  }]);
	
tbpControllers.controller('showcaseGridCtrl', ['$scope', '$http', 'windowScrollTop',
	function($scope, $http, windowScrollTop) {
		
		$scope.pageClass = 'showcaseHomePage';
	
		$http.get('showcase/all-projects.json').success(function(data) {
			$scope.projects = data;
		});

		//category filter
		$scope.setSelectedCategory = function (value) {
			$scope.selectedCategory = value;
		};
		$scope.categories = [
		  'Ecommerce',
			'Static',
			'jQuery plugins',
			'Holding pages',
			'Brand identity',
			'Designs, mockups'
		];
		
		$scope.byCategory = function(project){
			return project.category === $scope.selectedCategory;
		};

		$scope.selectedCategory = 'Ecommerce';
		
		/*
		$scope.doSomething = function(){
			console.log('hovered!');
			angular.element('ul.showcaseGalleryGrid').addClass('SOMETHING-BOOM');
		};
		$scope.doSomethingELSE = function(){
			angular.element('ul.showcaseGalleryGrid').removeClass('SOMETHING-BOOM');
		};
		*/

		$scope.scrollTop = function () {
      windowScrollTop();
    };

	}]);

tbpControllers.controller('indShowcasePieceCtrl', ['$scope', '$routeParams', '$http', 'windowScrollTop',
  function($scope, $routeParams, $http, windowScrollTop) {
		$scope.pageClass = 'showcaseIndPage';
		
    $http.get('showcase/' + $routeParams.projectId+ '.json').success(function(data) {
      $scope.project = data;
    });

    $scope.scrollTop = function () {
      windowScrollTop();
    };
		
  }]);

tbpControllers.controller('aboutCtrl', function($scope, windowScrollTop){
	$scope.pageClass = 'aboutPage';
	
	$scope.scrollTop = function () {
    windowScrollTop();
  };

});
	
tbpControllers.controller('contactCtrl', function($scope){
	$scope.pageClass = 'contactPage';
	$scope.tonyDetails = {
		email:'tony@tonybarnes.me'
	};
});


tbpControllers.controller('errorCtrl', function($scope){
	$scope.pageClass = 'errorPage';
});