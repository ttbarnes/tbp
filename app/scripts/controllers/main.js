'use strict';

var tbpControllers = angular.module('tbpControllers', []);

tbpControllers.controller('introCtrl', ['$scope', '$http', 'myService',
  function($scope,$http,myService) {
		$scope.pageClass = 'introPage';
		
		$http.get('showcase/recent-releases.json').success(function(data) {
      $scope.projects = data;
    });
    $scope.callFoo = function () {
			//$scope.selectedCategory = value;
			myService.foo();
		};

  }]);
	
tbpControllers.controller('showcaseGridCtrl', ['$scope', '$http',
	function($scope, $http) {
		
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
				
	}]);

tbpControllers.controller('indShowcasePieceCtrl', ['$scope', '$routeParams', '$http',
  function($scope, $routeParams, $http) {
		$scope.pageClass = 'showcaseIndPage';
		
    $http.get('showcase/' + $routeParams.projectId+ '.json').success(function(data) {
      $scope.project = data;
    });
		
  }]);

tbpControllers.controller('aboutCtrl', function($scope){
	$scope.pageClass = 'aboutPage';
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